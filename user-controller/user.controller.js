const User = require("../model/user.model.js");

const getUser = async (req, res) => {
  try {
    console.log("welcome to user");
    const allUser = await User.find({});
    res.status(200).json(allUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const usersBooks = await User.findById(id);
    res.status(200).json(usersBooks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  console.log("req121212", req.body);
  try {
    const { email } = req.body;
    const existingUser = await User.findOne({ email });
    console.log("existingUser", existingUser);
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const createdUser = await User.create(req.body);
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUser,
  createUser,
  getSingleUser,
};
