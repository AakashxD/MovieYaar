const router =require('express').Router();
const {signupValidation,loginValidation}=require('../middleware/auth-validation');
 const { paymentController}=require('../controllers/payment.controller')
 const {verifypaymentcontroller }=require('../controllers/verifypayment.controller')
 const {signupController,loginController} =require("../controllers/Auth.controller")
router.post('/login',loginValidation,loginController)
router.post('/signup',signupValidation,signupController)
router.post('/payment',paymentController,(req,res)=>{
    res.send('payment in process')
})
router.post('/verify',verifypaymentcontroller,(req,res)=>{
    res.send('payment succesfull')
})
module.exports=router;
