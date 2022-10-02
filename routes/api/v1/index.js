const express = require("express");
const router = express.Router();
const passport = require("passport");


//routes
router.use('/teacher/', require('./teacher'));
router.use('/learner', require('./learner'));

module.exports = router;