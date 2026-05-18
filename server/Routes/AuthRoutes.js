// const {default:login} = require("../../public/src/pages/Login")

// const {register}  = require("../Controllers/AuthControllers")

// const router  = require("express").Router();

// router.post("/")
// router.post("/register",register)
// router.post("/login",login)


// module.exports  =router









// const router = require("express").Router()

// const { register, login } = require("../Controllers/AuthControllers")

// const { checkUser } = require("../Middlewares/authMiddlewares")

// router.post("/", checkUser)

// router.post("/register", register)

// router.post("/login", login)

// module.exports = router





const router = require("express").Router();

const { register, login } = require("../controllers/AuthControllers");

const { checkUser } = require("../middlewares/authMiddlewares");

router.post("/register", register);

router.post("/login", login);

router.get("/", checkUser);

module.exports = router;