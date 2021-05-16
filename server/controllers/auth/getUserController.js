const { User } = require("../../models/userModel");

exports.geUsers = async (req, res) => {
  try {
    const allusers = await User.find();

    const users = [];
    allusers.forEach((element) => {
      if (element.isVerified) {
        users.push(element);
      }
    });

    res.json({
      users,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
