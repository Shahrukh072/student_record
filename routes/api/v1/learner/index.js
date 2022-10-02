const express = require('express');
const router = express.Router();
const passport = require("passport");


//import controller
const learnerController = require('../../../../controllers/api/v1/learnersController');


//learner  routes
router.post('/register_learner',passport.authenticate("jwt", { session: false }), learnerController.registerLearner);


//export router
module.exports = router;