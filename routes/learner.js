const express = require('express');
const router = express.Router();
const learnerController = require('../controllers/learner');


//patient and report routes
router.post('/register_learner', learnerController.registerLearner);


//export router
module.exports = router;