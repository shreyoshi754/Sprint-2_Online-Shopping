const jwt =require('jsonwebtoken');
const prisma =require('../Db/index')
const auth=async(req,res,next)=>{
    try{
        const token = req.header('Authorization').split(' ')[1];
        if(!token){
            res.send("Aceess Denied")
        }
       var authVerify= jwt.verify(token,process.env.SECRET_KEY)
       const user= await prisma.user.findFirst({
           where:{id:authVerify.unique}
       })

       req.user=user;
       console.log(req.user)
       next()

    }catch(err){
        console.log(err)
    }

}

module.exports =auth;