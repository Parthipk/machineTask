const express = require('express');
const router = express.Router();

const { userValidationSchema } = require('../../../validators/userValidation');
const { signup, login } = require('../../../controller/v1/user/user');
const { isUserAuthentication } = require('../../../middleware/isUserAuthentication');
const validate = require('../../../middleware/validate');




// auth
router.post('/signUp', validate(userValidationSchema), signup)
router.post('/logIn',login)



module.exports = router;
