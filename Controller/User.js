const bcrypt = require('bcrypt');
const prisma = require('../Db/index')
const jwt = require('jsonwebtoken');
exports.postSignup = async (req, res, next) => {
  
    let {name, password, email,role} = req.body;

    const saltOrRounds = 10;
    password = await bcrypt.hash(password, saltOrRounds);
    console.log(password);
   
    try {
        console.log("Hello")
       
        const user = await prisma.user.create({
            data:{name,email,password,role}
        });
        res.send(user);
    } catch (error) {
        const errorToThrow = new Error();
        switch (error?.code) {
            case '23505':
                errorToThrow.message = 'User already exists';
                errorToThrow.statusCode = 403;
                break;
            default:
                errorToThrow.statusCode = 500;
        }
    
        next(errorToThrow);
    }
};

exports.postLogin = async (req, res, next) => {
    let {email, password} = req.body;
    
    process.env.SECRET_KEY
     try{

        const existingUser = await prisma.user.findUnique({
			where: {
				email,
			},
		});

        if(!existingUser){
           return res.send({
               "isLoggedin":false,
               "status":"user doesn't exist"
           });
        }

        var passwordMatch = await bcrypt.compare(password, existingUser.password);
        if(!passwordMatch){
            return res.send({
                "isLoggedin":false,
                "status":"Password didn't Match"})
        }

        const obj={
            unique: existingUser.id
        }

        const token=jwt.sign(obj, process.env.SECRET_KEY)
        res.send({
            "isLoggedin":true,
            "token":token,
            "status":"Logged in Successfully"
        })

     }catch(err){
        console.log(err)
     }


}

exports.getDetails = async(req,res)=>{
    return res.send(req.user);
}