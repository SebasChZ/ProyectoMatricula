
const SingletonDAO = require('./SingeltonDAO.js');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fsPromises = require('fs').promises;

const loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    if(!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }    
    let valueLoggin  = true;//await SingletonDAO.loginUser(req, res, next);
    if (valueLoggin == false) {
        console.log("User login failed");
    }else{
        const accessToken = jwt.sign({ "username": email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' });
        const refreshToken = jwt.sign({ "username": email }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });

        const currentUser = {... email, refreshToken}
        console.log("User login success");
        res.status(200).json({ accessToken, currentUser });
    }
    next();
}

const registerUser = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }
    //check for duplicate usernames in the db
    const duplicate = await User.findOne({ email: email }).exec();

    if (duplicate) {
        return res.status(400).json({ msg: 'User already exists' });
    }

    try {
        //encrypt password
        console.log("IM HERE");
        const hashedPassword = await bcrypt.hash(password, 10);

        //create and store the new user
        
        const newUserResult = await User.create({ "email": email, "password": hashedPassword });
        console.log("IM HERE");
        console.log(newUserResult);

        res.status(200).json({ msg: 'User created' });
    } catch {
        res.status(500).json({ msg: 'Server error' });
    }
    next();
}




module.exports = {loginUser,registerUser};