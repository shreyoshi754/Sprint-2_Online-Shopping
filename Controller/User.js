const User = require('../Models/User');
const bcrypt = require('bcrypt');

exports.postSignup = async (req, res, next) => {
  
    let {username, password, email, bio} = req.body;

    const saltOrRounds = 10;
    password = await bcrypt.hash(password, saltOrRounds);
    console.log(password);
   
    try {
        console.log("Hello")
        const user = new User({username,password, email, bio});
        const result = await user.createUser();
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