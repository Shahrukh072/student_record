const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacher');


//doctor routes
router.post('/register', teacherController.register);
router.post('/login', teacherController.login);


//export router
module.exports = router;