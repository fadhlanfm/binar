const { User, Company } = require("../models")
const { encrypt } = require("../helpers/bcrypt")
const { getUserData } = require("../helpers/jwt")

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
    let token = req.headers.token;
    let userData = getUserData(token)
    // kita filter get usernya berdasarkan company id yg lagi login
    let userCompanyId = userData.companyId;
    const users = await User.findAll({ 
      where: {
        companyId: userCompanyId
      },
      include: Company 
    });
    res.status(200).json(users)
  }
}

module.exports = UsersController