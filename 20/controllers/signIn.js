const { User } = require("../models")
const { isCorrectPw } = require("../helpers/bcrypt")

class SignInController {
  static async signIn(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    // get user by email
    const user = await User.findOne({ where: { email: email } });
    const hashedPw = user.dataValues.password;
    console.log("🚀 ~ file: signIn.js ~ line 11 ~ SignInController ~ signIn ~ hashedPw", hashedPw)
    // bandingin passwordnya
    // const isAccPw = isCorrectPw(password, hashedPw)
    // console.log("🚀 ~ file: signIn.js ~ line 15 ~ SignInController ~ signIn ~ isAccPw", isAccPw)
    if (isCorrectPw(password, hashedPw)) {
      // passwordnya bener dapet token
      console.log("kasih token")
    } else {
      // passwordnya salah kasih message wrong pasword
      let message = { message: "auth failed"}
      res.status(401).json(message)
    }
  }
}

module.exports = SignInController;