const mongoose = require("mongoose")
const Schema = mongoose.Schema

const fileSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    phonenumber: {
        type: Number,
        required:true
    },
    gender: {
        type: String,
        required:true
    },
    salary: {
        type: Number,
        required:true
    },
    age: {
        type: Number,
        required:true
    },
    companyname: {
        type: String,
        required:true
    },
})



module.exports = mongoose.model("file", fileSchema);