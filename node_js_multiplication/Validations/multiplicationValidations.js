const joi = require('joi');
const errors = require('restify-errors');

exports.ValidationFuncation = (req,res,next) => {

   const schema = joi. object().keys({
    NumberOne: joi.number().integer().min(1).max(100).required(), 
    NumberTwo: joi.number().integer().min(1).max(100).required(),
   });

    // schema options
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };

    //from where to get the data
    const body = req.body;

    //validate the data
    const { error, value } = schema.validate(body, options);
    
    
    if (error) {
        // on fail return comma separated errors
        console.log("\n\n\n\n\ I am in error part \n\n\n\n")
        res.send(JSON.stringify({errorMessage:error.details[ 1 ].message}));
       // next();
    } else {
        req.body = value;
        next();
    }   

}

