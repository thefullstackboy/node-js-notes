const { Console } = require("console");
const Users = require("../models/usersModel");

//Post methode Mulipication 
const multiPlication = async (req,res,next)=> {
   const username = req.body.username;
   const email = req.body.email;

//data object bana kare send karna ha
   console.log("Username:", username);
   console.log("Email",email);

   const userObj = {
      username:username,
      email:email
   };

   const user = await Users.create(userObj);
   res.send({message:"success", data:user});



 /*   const NumberOne = parseInt(req.body.NumberOne); 
    const NumberTwo = parseInt(req.body.NumberTwo);

    console.log("Number is =>", NumberOne);
    console.log("Number is =>", NumberTwo);


    res.send({
            Solution: NumberOne * NumberTwo
    }) */
}


//get mehode Mulipication
const Mulitipliationp2 = (req,res,next)=> {
   const InputNumber1 = parseInt(req.query.InputNumber1);
   const InputNumber2 = parseInt(req.query.InputNumber2); 



   console.log("Number is =>", InputNumber1);
   console.log("Number is =>", InputNumber2);

   res.send({
            Solution: InputNumber1 * InputNumber2
                   
   })

} 

//Params method
const Mulitipliationp3 = (req,res,next)=>{
    const EnterNumber1 = parseInt(req.params.EnterNumber1)
    const EnterNumber2 = parseInt(req.params.EnterNumber2)


 console.log('This number is=>', EnterNumber1)
 console.log('This number is=>', EnterNumber2)
      
        res.send({
               Solution: EnterNumber1 * EnterNumber2
           })
}

//Basic form
const BasicForm = (req,res,next)=>{
   const userName = req.body.userName;
   const userEmail = req.body.userEmail;
   const userCreatePassword = req.body.userCreatePassword;
   const usrConfirmPassword = req.body.usrConfirmPassword;

   res.send({
      userName:userName,
      userEmail:userEmail,   
      userCreatePassword:userCreatePassword,
      usrConfirmPassword:usrConfirmPassword
   })
}




module.exports = {
   multiPlication,
   Mulitipliationp2,
   Mulitipliationp3,
   BasicForm
}