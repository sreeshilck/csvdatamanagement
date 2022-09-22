const userModel = require("../models/userModel")
const fileModel = require("../models/fileModel")
const csvtojson = require("csvtojson")
const fs = require("fs")
const upload = require("../utils/multer")

// user register
// @route POST => /api/register
module.exports.userRegister = async (req, res) => {
    try {
        console.log(req.body)
        const { name, email, password } = req.body

        // check if user already exist
        const isUserExists = await userModel.findOne({ email })
        // return if exists
        if (isUserExists) return res.status(409).json({ created: false, message: "User already exists" });

        //create newuser
        const newUser = await userModel.create({ name, email, password })

        res.status(201).json({ user: newUser._id, created: true, msg: " user registered successfully" })

    } catch (error) {
        console.error(error)
        res.status(400).json({ created: false, msg: "user registration failed" })
    }
}

// user login
// @route POST => /api/login
module.exports.userLogin = async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body

        // find user in db
        const user = await userModel.findOne({ email })

        // return if user not found
        if (!user) return res.status(400).json({ isLoggedIn: false, msg: "Invalid Email or Password" })

        // check entered password is matching
        const isPasswordMatch = await user.comparePassword(password);

        //return if password not matched
        if (!isPasswordMatch) return res.status(400).json({ isLoggedIn: false, msg: "Invalid Email or Password" });

        res.status(200).json({ isLoggedIn: true, msg: "login success" });

    } catch (error) {
        console.error(error)
        res.status(400).json({ isLoggedIn: false, msg: "Invalid Email or Password" })
    }
}

// upload .csv file
// @route POST => /api/upload
module.exports.uploadFile = async (req, res, next) => {
    try {
        upload(req, res, (err) => {
            if (err) return res.status(400).json(err)

            const file = req.file

            //
            csvtojson()
                .fromFile(file.path)
                .then((json) => {
                    let fileData = json
                    saveFileData(fileData)
                })

            async function saveFileData(fileData) {

                

                //iterate each data
                for (let i = 0; i < fileData.length; i++) {
                    console.log(fileData);
                    let data = new fileModel({
                        name: fileData[i].Name,
                        email: fileData[i].Email,
                        phonenumber: +fileData[i].Phonenumber,
                        salary: +fileData[i].Salary,
                        gender: fileData[i].Gender,
                        age: +fileData[i].Age,
                        companyname: fileData[i].Companyname,
                    })
                    //save 
                    await data.save()
                }
                const Data = await fileModel.find()
                // res.status(201).json({ Data })
                res.status(201).json({ upload: true, msg: "file uploaded successfully" })
            }

        })


    } catch (error) {
        console.error(error)
        res.status(400).json({ upload: false, msg: "file upload failed" })
    }
}


// get file data
// @ route GET => /api/getdata
module.exports.getfileData = async (req, res) => {
    try {

        const data = await fileModel.find()
        res.status(200).json({ data })

    } catch (error) {
        console.error(error)
        res.status(400).json("data not found")
    }
}