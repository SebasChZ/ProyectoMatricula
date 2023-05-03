const bcrypt = require('bcrypt');
const User = require('../models/User');

const handleNewUser = async (req, res, next) => {
    
    const { email, password } = req.body;
    if(!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }
    //check for duplicate usernames in the db
    const duplicate = await User.findOne({ email: email }).exec();

    if (duplicate) {
        return res.status(400).json({ msg: 'User already exists' });
    }

    try{
        //encrypt password
        const hashedPassword = await bcrypt.hash(password, 10);

        //create and store the new user
        const newUserResult = await User.create({ "email": email, "password": hashedPassword });
      
        console.log(newUserResult);

        res.status(200).json({ msg: 'User created' });
    }catch{
        res.status(500).json({ msg: 'Server error' });
    }
    next();
}

const handleLoginUser = async (req, res, next) => {
    
    const { email, password } = req.body;
    if(!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }
    
    try{
        //check for duplicate usernames in the db
        const duplicate = await User.findOne({ email: email }).exec();
        console.log(duplicate.password);
        if (duplicate) {
            bcrypt.compare(duplicate.password, password, (err, result) => {
                if (result == true) {
                    res.status(200).json({ msg: 'User logged' });
                } else {
                    res.status(400).json({ msg: 'User not logged' });
                }
            });
        }
    }catch{
        res.status(500).json({ msg: 'Server error' });
    }
    next();
}


module.exports = {
    handleNewUser,
    handleLoginUser};