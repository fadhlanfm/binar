const { User, Company } = require("../models")

class UsersController{
  static async create(req, res) {
    const email = req.body.email
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const companyId = req.body.companyId
    const objUser = { email, firstName, lastName, companyId }
    const user = await User.create(objUser);
    if (user) {
      res.status(200).json(user)
    }
  } 

  static async getAll(req, res) {
    // const users = await User.findAll();
    const users = await User.findAll({ include: Company });
    res.status(200).json(users)
  }
}

module.exports = UsersController