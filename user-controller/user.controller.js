const User = require("../model/user.model.js");



const getUser = async (req, res) => {
    try {
        console.log("welcome to user");
        const createdUser = await User.find({});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createUser = async (req, res) =>{
    console.log('req', req)
    try {
        const createdUser = await User.create(req.body);
        res.status(201).json(createdUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getUser,
    createUser
}