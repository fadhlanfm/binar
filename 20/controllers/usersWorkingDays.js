const { UsersWorkingDay, User, WorkingDay, Company } = require("../models")
const company = require("../models/company")

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
    // include in array of object untuk many to many
    // nested include
    const usersWorkingDays = await UsersWorkingDay.findAll({
      include: [
        {
          model: User,
          include: Company
        },
        {
          model: WorkingDay
        }
      ]
    });
    res.status(200).json(usersWorkingDays)
  }
}

module.exports = UsersController