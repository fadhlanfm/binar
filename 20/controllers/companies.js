const { Company } = require("../models")

class CompaniesController {
  static async create(req, res) {
    const name = req.body.name
    const objCompany = { name }
    const company = await Company.create(objCompany);
    if (company) {
      res.status(200).json(company)
    }
  }

  static async getAll(req, res) {
    const companies = await Company.findAll();
    res.status(200).json(companies)
  }
}

module.exports = CompaniesController