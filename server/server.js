
const express = require ('express')
const morgan = require ("morgan")
const cors = require("cors")
const connectDatabase = require ("./config/database")
const router = require ("./routes/router")


const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'))
app.use(cors(
    {

    origin: ["http://localhost:3000"],
    method: ["GET", "POST", "PUT"],
    credentials : true,   
}
))


app.use("/api", router)



//DB connection
connectDatabase();


app.listen(4000, () =>{
    console.log("server is running on port 4000");
})