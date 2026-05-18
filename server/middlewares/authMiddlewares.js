// const User = require("../Models/UserModel")

// const jwt = require("jsonwebtoken")

// module.exports.checkUser = async (req, res, next) => {

//   const token = req.cookies.jwt

//   if (!token) {

//     return res.json({
//       status: false,
//     })
//   }

//   try {

//     const decodedToken = jwt.verify(
//       token,
//       process.env.JWT_SECRET
//     )

//     const user = await User.findById(decodedToken.id)

//     if (!user) {

//       return res.json({
//         status: false,
//       })
//     }

//     return res.json({
//       status: true,
//       user: user.email,
//     })

//   } catch (err) {

//     console.log(err)

//     return res.json({
//       status: false,
//     })
//   }
// }


const User = require("../models/UserModel")
const jwt = require("jsonwebtoken")

module.exports.checkUser = async (req, res) => {

  const token = req.cookies.jwt

  if (!token) {
    return res.json({
      status: false,
    })
  }

  try {

    const decodedToken = jwt.verify(
      token,
      process.env.JWT_SECRET
    )

    const user = await User.findById(decodedToken.id)

    if (!user) {
      return res.json({
        status: false,
      })
    }

    return res.json({
      status: true,
      user: user.email,
    })

  } catch (err) {

    return res.json({
      status: false,
    })
  }
}