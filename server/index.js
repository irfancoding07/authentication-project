// const express = require("express")
// const cors = require("cors")
// const mongoose = require("mongoose")
// const app = express()


// app.listen(4000, ()=> {
//     console.log("Server Started on port 4000")
// })

// mongoose.connect("mongodb://localhost:2701/jwt",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// }).then(()=>{
//     console.log("DB Connection Successfull")
// }).catch(err=>{
//     console.log(err.message);
// })

// app.use(cors({
//     origin:["http://localhost:3000"],
//     method: ["GET", "POST"],
//     credentials:true,
// }))

// app.use(express.json())




// const express = require("express")
// const cors = require("cors")
// const mongoose = require("mongoose")
// const cookieParser = require("cookie-parser")

// require("dotenv").config()

// const authRoutes = require("./Routes/AuthRoutes")

// const app = express()

// app.use(cors({
//     origin: ["http://localhost:5173"],
//     methods: ["GET", "POST"],
//     credentials: true,
// }))

// app.use(cookieParser())

// app.use(express.json())

// app.use("/", authRoutes)

// mongoose.connect(process.env.MONGO_URL)
// .then(() => {
//     console.log("DB Connection Successful")
// })
// .catch((err) => {
//     console.log(err.message)
// })

// app.get("/", (req, res) => {
//     res.send("Backend Running")
// })

// app.listen(process.env.PORT, () => {
//     console.log(`Server Started on port ${process.env.PORT}`)
// })







// const express = require("express")
// const cors = require("cors")
// const mongoose = require("mongoose")
// const app = express()


// app.listen(4000, ()=> {
//     console.log("Server Started on port 4000")
// })

// mongoose.connect("mongodb://localhost:2701/jwt",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// }).then(()=>{
//     console.log("DB Connection Successfull")
// }).catch(err=>{
//     console.log(err.message);
// })

// app.use(cors({
//     origin:["http://localhost:3000"],
//     method: ["GET", "POST"],
//     credentials:true,
// }))

// app.use(express.json())




// const express = require("express")
// const cors = require("cors")
// const mongoose = require("mongoose")
// const cookieParser = require("cookie-parser")

// require("dotenv").config()

// const authRoutes = require("./Routes/AuthRoutes")

// const app = express()

// app.use(cors({
//     origin: ["http://localhost:5173"],
//     methods: ["GET", "POST"],
//     credentials: true,
// }))

// app.use(cookieParser())

// app.use(express.json())

// app.use("/", authRoutes)

// mongoose.connect(process.env.MONGO_URL)
// .then(() => {
//     console.log("DB Connection Successful")
// })
// .catch((err) => {
//     console.log(err.message)
// })

// app.get("/", (req, res) => {
//     res.send("Backend Running")
// })

// app.listen(process.env.PORT, () => {
//     console.log(`Server Started on port ${process.env.PORT}`)
// })







require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./Routes/AuthRoutes");

const app = express();

app.use(cors({
  origin: "https://authentication-project-uu62.vercel.app",
  methods: ["GET", "POST"],
  credentials: true,
}));

app.use(cookieParser());

app.use(express.json());

app.use("/", authRoutes);

mongoose.connect(process.env.MONGO_URL)
.then(() => {
  console.log("DB Connection Successful");
})
.catch((err) => {
  console.log(err.message);
});

app.listen(process.env.PORT, () => {
  console.log(`Server Started on port ${process.env.PORT}`);
});