const joi = require('joi');

exports.FormValidation = (req,res,next)=> {
   
    const schema = joi.object().keys({
        userName: joi.string().min(3).max(16).required(), 
        userEmail: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        userCreatePassword: joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        usrConfirmPassword: joi.ref('userCreatePassword'),
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
    res.send(JSON.stringify({errorMessage:error.details[ 0 ].message}));
   // next();
} else {
    req.body = value;
    next();
}   

}

