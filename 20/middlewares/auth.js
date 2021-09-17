function isLogin(req, res, next) {
  let token = req.headers.token
  console.log("🚀 ~ file: auth.js ~ line 3 ~ isLogin ~ token", token)

  if (!token) {
    res.status(401).json({ message: "please login first"})
  }

  next()
}

module.exports = {
  isLogin
}