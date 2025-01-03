const User = require('../models/user.models'); 

const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ msg: "User already exists, please login", success: false });
        }
        const newUser = new User({
            username,
            email,
            password
        });
        
        

    } catch (error) {
        console.error(error); 
        res.status(500).json({ msg: "An error occurred", success: false });
    }
};

module.exports = { signup };
