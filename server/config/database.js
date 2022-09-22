const mongoose = require("mongoose")

const connectDatabase = () => {
    mongoose.connect("mongodb://localhost:27017/glasier-task", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("DB Connection Successful");
    }).catch((err) => {
        console.log(err.message, "DB Connection Failed");
    })
}


module.exports = connectDatabase;