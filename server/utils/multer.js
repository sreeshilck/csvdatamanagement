const multer = require('multer')
const fs = require("fs")

//multer config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "assets/files")
    },
    filename: (req, file, cb) => {
       cb(null, file.originalname)
    }
})
const fileType = (req, file, cb) => {
    if (
        file.mimetype == "text/csv"
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};
const upload = multer({ storage, fileFilter: fileType }).single('file')


module.exports = upload;