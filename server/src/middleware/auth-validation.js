const Joi=require('joi')
const signupValidation=(req,res,next)=>{
    const schema=Joi.object({
        username:Joi.string().min(3).max(20).required(),
        email:Joi.string().email().required(),
        password:Joi.string().min(4).max(15).required()
    });
    const  {error}=schema.validate(req.body);
    if(error){
        return res.status(400).json({msg:"bad REquest",error})
    }
    next();
}
const loginValidation=(req,res,next)=>{
    const schema=Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().min(4).max(15).required()
    });
    const  {error}=schema.validate(req.body);
    if(error){
        return res.status(400).json({msg:"bad REquest",error})
    }
    next();
}
module.exports={
    signupValidation,
    loginValidation
}