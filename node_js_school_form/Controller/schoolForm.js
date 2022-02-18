const { Console } = require("console");
const Users = require("../models/SchoolModel");




//Create data 
const SchoolForm = async (req,res,next)=> {
    const studentName = req.body.studentName;
    const fatherName = req.body.fatherName;
    const motherName = req.body.motherName;
    const birthDate = req.body.birthDate;
    const phoneNumber = req.body.phoneNumber;

    console.log("studentName", studentName);
    console.log("fatherName", fatherName);
    console.log("moherName", motherName);
    console.log("birthDate", birthDate);
    console.log("phoneNumber", phoneNumber);

    const studentObj = {
        studentName:studentName,
        fatherName:fatherName,
        motherName:motherName,
        birthDate:birthDate,
        phoneNumber:phoneNumber,
           
     };
  
     const user = await Users.create(studentObj);
     res.send({message:"success", data:user});
}



//upDate data
const studentUpdateData = async (req,res,next)=> {

    try{
    const editstudentName = req.body.editstudentName;
    const editfatherName = req.body.editfatherName;
    const editmotherName = req.body.editmotherName;
    const editbirthDate = req.body.editbirthDate;
    const editphoneNumber = req.body.editphoneNumber;
    const studentId = req.body.studentId


  

    const studentUpdateData= {
        studentName:editstudentName,
        fatherName:editfatherName,
        motherName:editmotherName,
        birthDate:editbirthDate,
        phoneNumber:editphoneNumber,         
     };
  
    
    
    

    const result = await Users.update(
        studentUpdateData,
          {  where:{id:studentId} }        
      )    
    
    
    res.send({success:true, data:result})
    } catch(err){
        console.log(err)
        res.send({success:false, data:[]});
    }


}


//Find student's informaion
const findeInformation = async(req,res,next)=> {
    const findstudentName = req.body.findstudentName;
    const findfatherName = req.body.findfatherName;

    console.log(findstudentName)

    const findDetails = {
        studentName:findstudentName,
        fatherName:findfatherName  
    }

    const receiveInformaion = await Users.findAll(
      {where:{
          studentName:findstudentName,
          fatherName:findfatherName,
          active:1
      }}
    )

    console.log(findstudentName)
    console.log(findfatherName)

    res.send({success:true, data:receiveInformaion})

 


    
   
}




module.exports = {
    SchoolForm,
    studentUpdateData,
    findeInformation
}      