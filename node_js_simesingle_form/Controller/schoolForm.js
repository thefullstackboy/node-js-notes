const { Console } = require("console");
const Users = require("../models/SchoolModel");

//Post method school Form data
const SchoolForm = async (req,res,next)=> {
    const studentName = req.body.studentName;
    const fatherName = req.body.fatherName;
    const motherName = req.body.motherName;
    const birthDate = req.body.birthDate;
    const phoneNumber = req.body.phoneNumber;



//data send 
        const studentInformaiton =  {
            studentName:studentName,
            fatherName: fatherName,
            motherName: motherName,
            birthDate:  birthDate,
            phoneNumber: phoneNumber
        };

        const StudentData = await Users.create(studentInformaiton);
      res.send({message:"success", data:StudentData})

}





module.exports = {
    SchoolForm
}      