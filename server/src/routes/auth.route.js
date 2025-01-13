const router =require('express').Router();
const {signupValidation,loginValidation}=require('../middleware/auth-validation');
 const {signupController,loginController} =require("../controllers/Auth.controller")
router.post('/login',loginValidation,loginController)
router.post('/signup',signupValidation,signupController)

module.exports=router;
