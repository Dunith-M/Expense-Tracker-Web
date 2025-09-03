const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const result = await User.findOne({email: req.body.email , password: req.body.password});

    if(result){
        res.json(result);
    } else {
        res.status(401).json({ message: "Invalid email or password" }); 
    }
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
    
});


router.post('/register', async (req, res) => {
    try {
        const newuser = new User(req.body);
        await newuser.save();
        res.send("User Registered Successfully");

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
    
});

module.exports = router;