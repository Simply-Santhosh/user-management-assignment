const User = require("../models/User");

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
    });
  }
};

module.exports = {
  getUsers,
};
