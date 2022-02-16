const express = require('express');
const router = express.Router();
const contRoller = require('../Controller/Muliplication_Controller')
const multiplicationValidation = require('../Validations/multiplicationValidations')
const FormValidation = require('../Validations/FormValidation')


//multiplicationValidation.ValidationFuncation

//post method
router.post('/multiplication',contRoller.multiPlication);


//get Method
router.get('/mulitipliation2',contRoller.Mulitipliationp2);

//params Method
router.get('/mulitipliation3/:EnterNumber1/:EnterNumber2',contRoller.Mulitipliationp3)

//get method Basic method
router.post('/basicform',FormValidation.FormValidation,contRoller.BasicForm)


module.exports = router;