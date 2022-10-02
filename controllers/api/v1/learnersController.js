const Learner = require('../../../models/learner');


module.exports = {
    //register learner
       registerLearner: async function (req, res) {
           try {
               let learner = await Learner.findOne({
                   name: req.body.name
               });
   
               //if already registered
               if (learner) {
                   return res.json(200, {
                       data: {
                        learner: learner
                       },
                       message: "Patient already registered"
                   });
               }
               learner = await Learner.create({
                   name: req.body.name
               });
   
               //return learner
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