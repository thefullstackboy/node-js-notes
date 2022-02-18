const express = require('express');
const router = express.Router();
const contRoller = require('../Controller/schoolForm')



//post method
router.post('/schoolForm',contRoller.SchoolForm)


module.exports = router;