const { User, Company } = require("../models")
const { encrypt } = require("../helpers/bcrypt")

class UsersController{
  static async create(req, res, next) {
    let statusCode;
    const email = req.body.email
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const companyId = req.body.companyId
    const password = encrypt(req.body.password)
    const objUser = { email, firstName, lastName, companyId, password }
    // const user = await User.create(objUser);
    // try {
    //   const user = await User.create(objUser);
    //   if (user) {
    //     statusCode = 201;
    //     let output = {
    //       statusCode, userCreated: user
    //     }
    //     res.status(201).json(output)
    //   }
    // } catch (error) {
    //   next(err)
    // }
    User.create(objUser)
      .then(user => {
        if (user) {
          statusCode = 201;
          let output = {
            statusCode, userCreated: user
          }
          res.status(201).json(output)
        }
      })
      .catch(err => {
        next(err)
      })
  } 

  static async getAll(req, res) {
    // const users = await User.findAll();
    const users = await User.findAll({ include: Company });
    res.status(200).json(users)
  }
}

module.exports = UsersController