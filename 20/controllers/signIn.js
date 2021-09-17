const { User } = require("../models")
const { isCorrectPw } = require("../helpers/bcrypt")
const { generateToken } = require("../helpers/jwt")

class SignInController {
  static async signIn(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    // get user by email
    const user = await User.findOne({ where: { email: email } });
    console.log("🚀 ~ file: signIn.js ~ line 12 ~ SignInController ~ signIn ~ user", user)
    const hashedPw = user.dataValues.password;
    // bandingin passwordnya
    // const isAccPw = isCorrectPw(password, hashedPw)
    if (isCorrectPw(password, hashedPw)) {
      // passwordnya bener dapet token
      // jwt.sign: masukin data user, ngereturn token
      // jwt.verify: masukin token, ngereturn data user
      console.log("kasih token", generateToken)
      let dataUser = user.dataValues;
      delete dataUser.password;
      console.log("🚀 ~ file: signIn.js ~ line 22 ~ SignInController ~ signIn ~ dataUser", dataUser)
      let token = generateToken(dataUser)
      console.log("🚀 ~ file: signIn.js ~ line 24 ~ SignInController ~ signIn ~ token", token)
      res.status(200).json({ token, message: "login success" })
    } else {
      // passwordnya salah kasih message wrong pasword
      let message = { message: "auth failed"}
      // status code 401: Unauthorized
      res.status(401).json(message)
    }
  }
}

module.exports = SignInController;