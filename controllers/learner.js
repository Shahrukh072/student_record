const Learner = require('../models/learner');


module.exports = {

    //register patient
    registerLearner: async function (req, res) {
        try {
            let learner = await Learner.findOne({
                name: req.body.name
            });
            if (learner) {
                return res.json(200, {
                    data: {
                        learner: learner
                    },
                    message: "Learner already registered"
                });
            }
            learner = await Learner.create({
                name: req.body.name
            });
            return res.json(200, {
                data: {
                    learner: learner
                },
                message: "Successfully Created!"
            });
        } catch (error) {
            return res.json(500, {
                message: "Internal Server Error" + error
            });
        }
    }

}