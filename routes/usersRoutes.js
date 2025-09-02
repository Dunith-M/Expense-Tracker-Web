const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const result = User.findOne({email: req.body.email , password: req.body.password});

    if(result){
        res.send(result);
    } else {
        res.status(500).json('Error');
    }
    } catch (error) {
        console.log(500).json('Error');
    }
    
});


router.post('/register', async (req, res) => {
    try {
        const newuser = new User(req.body);
        await newuser.save();
        res.send("User Registered Successfully");

    } catch (error) {
        console.log(500).json('Error');
    }
    
});

module.exports = router;