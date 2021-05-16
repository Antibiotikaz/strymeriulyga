const { User } = require("../../models/userModel");

exports.verifyUser = async (req, res) => {
  let { isVerified, userID } = req.body;
  try {
    const users = await User.findByIdAndUpdate(userID, {
      $set: {
        isVerified,
      },
    });

    res.json({
      users,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
