const router = require("express").Router();
const upload = require("../utils/multer")

const {
    userLogin, 
    userRegister,
    uploadFile,
    getfileData

} = require("../controller/userController")

// user login
router.post("/login", userLogin)
router.post("/register", userRegister) 

//.csv file upload
router.post("/upload", uploadFile)//, upload.single("file"),

//get file data
router.get("/filedata", getfileData)






module.exports = router;