const express = require('express');
const router = express.Router();
const teacherController = require('../../../../controllers/api/v1/teachersController');


//teacher routes
router.post('/register', teacherController.register);
router.post('/login', teacherController.login);


//export router
module.exports = router;