const Teacher = require('../models/teacher');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = {
    //create user
    register: async function (req, res) {
        try {
            let teacher = await Teacher.findOne({
                name: req.body.name
            });
            if (teacher) {
                return res.json(400, {
                    message: "Bad Request"
                });
            }

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
            if (bcrypt.compareSync(req.body.password, teacher.password)) {
                const token = jwt.sign({
                    id: teacher._id
                }, req.app.get('secretKey'), {
                    expiresIn: '2h'
                });

                res.json({
                    status: "Success",
                    message: "Logged in",
                    data: {
                        teacher: teacher,
                        token: token
                    }
                });
            } else {
                return res.json(422, {
                    message: "Invalid username or password"
                });
            }
        } catch (error) {
            return response.json(500, {
                message: "Internal Server Error " + error
            });
        }


    }
}

