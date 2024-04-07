const User = require('../models/user.model');
const {v4:uuidv4} = require('uuid');
const auhtService = require('../services/auth.service');

const handleUserSignup = async (req, res) => {
    try{
        const user = await User.create(req.body);
        res.status(200).json(user);
      } catch(error){
        res.status(500).json({message: error.message});
      }
}
const handleUserLogin = async (req, res) => {
    try{
        const user = await User.findOne({email: req.body.email});
        if(user === null){
            res.status(404).json({message: 'User not found!'});
            }
        if(user.password === req.body.password){
            const uuid = uuidv4();
            auhtService.setUser(uuid, user);
            //res.status(200).json({message: 'Login successful!', sessionId: uuid});
            res.cookie('uuid', uuid, {httpOnly: true});
            return res.status(200).json({message: 'Login successful!'});
        } else {
          res.status(401).json({message: 'Invalid credentials!'});
        }
        }
        catch(error){
          res.status(500).json({message: error.message});
        }
}

module.exports = {  
    handleUserSignup,
    handleUserLogin
}