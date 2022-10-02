//imports
const Teacher = require('../../../models/teacher');
const jwt = require('jsonwebtoken');
const bycrypt = require('bcrypt');


module.exports = {
    //create user
    register: async function (req, res) {
        try {
            let teacher = await Teacher.findOne({
                name: req.body.name
            });

            //if teacher exist,
            if (teacher) {
                return res.json(400, {
                    message: "Bad Request"
                });
            }

            //create teacher
            teacher = await Teacher.create(req.body);
            return res.json(200, {
                data: {
                    teacher: teacher
                },
                message: "Teacher created!"
            });
        } catch (error) {
            return res.json(500, {
                message: "Internal Server Error " + error
            });
        }
    },



    //authenticate user/login
    login: async function (req, res) {
        try {
           let teacher = await Teacher.findOne({
            email: req.body.email
      });

      //match password
      if (!teacher ||bycrypt.compareSync( teacher.password , req.body.password)) {
        return res.json(422, {
          message: "Invalid username or password"
        });
      }


      //return token
      return res.json(200, {
        data: {
            teacher: teacher,
          token: jwt.sign(teacher.toJSON(), "favTeacher", {
            expiresIn: "10000000"
          })
        },
        message: "Success!"
      });
        } catch (error) {
            return response.json(500, {
                message: "Internal Server Error " + error
            });
        }
    }   
}