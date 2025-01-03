const router =require('express').Router();
const {signupValidation,loginValidation}=require('../middleware/auth-validation');
 const { paymentController}=require('../controllers/payment.controller')
 const {verifypaymentcontroller }=require('../controllers/verifypayment.controller')
router.post('/login',loginValidation,(req,res)=>{
    res.send('login success');
})
router.post('/signup',signupValidation,(req,res)=>{
    res.send('signup success')
})
router.post('/payment',paymentController,(req,res)=>{
    res.send('signup success')
})
router.post('/verify',verifypaymentcontroller,(req,res)=>{
    res.send('signup success')
})
module.exports=router;
