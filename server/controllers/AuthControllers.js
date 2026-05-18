// const UserModel = require("../Models/UserModel");
// const jwt = require("jsonwebtoken")
// const maxAge = 3*24*60*60;

// const createToken = (id) => {
// return jwt.sign({id},"JWT_SECRET",{
//     expiresIn:maxAge,
// })
// }
// module.exports.register = async(req, resizeBy, next) => {}

// module.exports.login = async(req, resizeBy, next) => {
//     try {
//         const {email,password} = req.body;
//         const user = await UserModel.create({email, password});
//         const token = createToken(user._id);

//         res.cookie("jwt",token,{
//             withCrdentials:true,
//             httpOnly: false,
//             maxAge: maxAge * 1000,
//         })
//         res.status(201).json({user:user._id, created: true})
//     } catch (err) {
//         console.log(err);
//     }
// }










// const UserModel = require("../Models/UserModel")
// const jwt = require("jsonwebtoken")

// const maxAge = 3 * 24 * 60 * 60

// const createToken = (id) => {
//   return jwt.sign({ id }, "JWT_SECRET", {
//     expiresIn: maxAge,
//   })
// }

// module.exports.register = async (req, res, next) => {
//   try {

//     const { email, password } = req.body

//     const user = await UserModel.create({
//       email,
//       password,
//     })

//     const token = createToken(user._id)

//     res.cookie("jwt", token, {
//       httpOnly: true,
//       maxAge: maxAge * 1000,
//     })

//     res.status(201).json({
//       user: user._id,
//       created: true,
//     })

//   } catch (err) {
//     console.log(err)
//   }
// }

// module.exports.login = async (req, res, next) => {
//   try {

//     const { email, password } = req.body

//     const user = await UserModel.findOne({ email })

//     if (!user) {
//       return res.status(400).json({
//         message: "Incorrect Email",
//       })
//     }

//     if (user.password !== password) {
//       return res.status(400).json({
//         message: "Incorrect Password",
//       })
//     }

//     const token = createToken(user._id)

//     res.cookie("jwt", token, {
//       httpOnly: true,
//       maxAge: maxAge * 1000,
//     })

//     res.status(200).json({
//       user: user._id,
//       status: true,
//     })

//   } catch (err) {
//     console.log(err)
//   }
// }











 const User = require("../models/UserModel")
const jwt = require("jsonwebtoken")

const maxAge = 3 * 24 * 60 * 60

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  })
}

module.exports.register = async (req, res) => {

  try {

    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({
        error: "All fields are required",
      })
    }

    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(400).json({
        error: "Email already exists",
      })
    }

    const user = await User.create({
      email,
      password,
    })

    const token = createToken(user._id)

    // res.cookie("jwt", token, {
    //   httpOnly: true,
    //   maxAge: maxAge * 1000,
    // })

    res.cookie("jwt", token, {
  httpOnly: false,
  maxAge: maxAge * 1000,
  sameSite: "lax",
})

// res.cookie("jwt", token, {
//   httpOnly: true,
//   secure: true,
//   sameSite: "none",
//   maxAge: maxAge * 1000,
// })

    return res.status(201).json({
      created: true,
      user: user._id,
    })

  } catch (err) {

    console.log(err)

    return res.status(400).json({
      error: err.message,
    })
  }
}

// module.exports.login = async (req, res) => {

//   try {

//     const { email, password } = req.body

//     const user = await User.login(email, password)

//     const token = createToken(user._id)

//     res.cookie("jwt", token, {
//       httpOnly: true,
//       maxAge: maxAge * 1000,
//     })

//     return res.status(200).json({
//       status: true,
//       user: user._id,
//     })

//   } catch (err) {

//     return res.status(400).json({
//       error: err.message,
//     })
//   }
// }







module.exports.login = async (req, res) => {

  try {

    const { email, password } = req.body

    const user = await User.login(email, password)

    const token = createToken(user._id)

    // res.cookie("jwt", token, {
    //   httpOnly: true,
    //   maxAge: maxAge * 1000,
    // })

    res.cookie("jwt", token, {
  httpOnly: false,
  maxAge: maxAge * 1000,
  sameSite: "lax",
})


// res.cookie("jwt", token, {
//   httpOnly: true,
//   secure: true,
//   sameSite: "none",
//   maxAge: maxAge * 1000,
// })

    return res.status(200).json({
      status: true,
      user: user._id,
    })

  } catch (err) {

    return res.status(400).json({
      status: false,
      error: err.message,
    })
  }
}