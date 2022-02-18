const express = require('express');
const router = express.Router();
const contRoller = require('../Controller/schoolForm')




//post method create data
router.post('/schoolForm',contRoller.SchoolForm)

//post method update data
router.post('/updateschoolForm',contRoller.studentUpdateData)

//find Data 
router.post('/findeInformation',contRoller.findeInformation)




module.exports = router;