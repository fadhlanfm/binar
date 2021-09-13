const { Teacher } = require("../models")

class TeachersController {
  static async getTeachers (req, res) {
    const teachers = await Teacher.findAll();
    res.status(200).json(teachers)
    // res.render("teachers", { teachers });
    // console.log("🚀 ~ file: teachers.js ~ line 6 ~ TeacherController ~ getTeachers ~ teachers", teachers.dataValues)
  }

  static async getTeacherById (req, res) {
    console.log("🚀 ~ file: teachers.js ~ line 12 ~ TeachersController ~ getTeacherById ~ req", req.params)
    // const id = req.params.id;
    const { id } = req.params;
    const teacher = await Teacher.findByPk(id);
    console.log("🚀 ~ file: teachers.js ~ line 16 ~ TeachersController ~ getTeacherById ~ teacher", teacher)
    if (teacher == null) {
      res.status(404).json({ "message": "data not found"})
    } else {
      res.status(200).json(teacher)
    }
  }

  static async createTeacher (req, res) {
    console.log("🚀 ~ file: teachers.js ~ line 25 ~ TeachersController ~ createTeacher ~ req", req.body)
    // name, email
    // let objTeacher = req.body;
    let nameTeacher = req.body.name;
    let emailTeacher = req.body.email;
    let objTeacher = {
      name: nameTeacher,
      email: emailTeacher
    }
    const teacher = await Teacher.create(objTeacher);
    if (teacher) {
      res.status(200).json(teacher)
    }
  }

  static async updateTeacher (req, res) {
    let idTeacher = req.params.id;
    let nameTeacher = req.body.name;
    let emailTeacher = req.body.email;
    let objTeacher = {
      name: nameTeacher,
      email: emailTeacher
    }
    const teacher = await Teacher.update(objTeacher, {
      where: {
        id: idTeacher
      }
    });

    if (teacher) {
      let output = {
        teacher,
        message: "update success"
      }
      res.status(200).json(output)
    }
  }

  static async deleteTeacherById (req, res) {
    let idTeacher = req.params.id;
    console.log("🚀 ~ file: teachers.js ~ line 65 ~ TeachersController ~ deleteTeacherById ~ idTeacher", idTeacher)

    const deletedTeacher = await Teacher.findByPk(idTeacher);

    if (deletedTeacher) {
      const teacher = await Teacher.destroy({
        where: {
          id: idTeacher
        }
      });
  
      if (teacher) {
        let output = {
          deletedTeacher,
          message: "delete success"
        }
        res.status(200).json(output)
      }
    } else {
      res.status(404).json({ "message": "data not found"})
    }
  }
}

module.exports = TeachersController;