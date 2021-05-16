const { User } = require("../../models/userModel");
const validator = require("validator");
const path = require("path");
exports.registerUser = async (req, res) => {
  try {
    let { email, twitchAccount } = req.body;
    const images = [];
    // register validation
    // validates required fields
    if (!email || !twitchAccount) {
      return res.status(400).json({ msg: "Fill all fields" });
    }
    email = email.toLowerCase();

    if (!validator.isEmail(email)) {
      return res.status(400).json({ msg: "Invalid email adress" });
    }

    // checks if email exists
    const existingUser = await User.findOne({ email });
    console.log(existingUser, "existingUser");

    if (existingUser) {
      return res.status(400).json({ error: true, errorStatus: 1 });
    }
    // image logic

    const reqFile = req.files.file;
    if (reqFile.size > 7000000) {
      return res.status(400).json({ error: true, errorStatus: 2 });
    }
    console.log(reqFile, "REQ File");

    // get files from request
    if (req.files !== undefined && req.files !== null) {
      const queryPath = "assets/images";
      // checks file type
      if (
        reqFile.mimetype !== "image/jpeg" &&
        reqFile.mimetype !== "image/png"
      ) {
        return res.status(400).json({ error: "Not an image." });
      }
      // get file extension
      const extension = path.extname(`${reqFile.name}`);
      // construct image file name / path
      const imgPath = `twitchLogo-${Date.now()}${extension}`;
      reqFile.mv(`${queryPath}/${imgPath}`);
      images.push(imgPath);
    }

    // creates new user

    const newUser = new User({
      email,
      twitchAccount,
      image: images[0],
      isVerified: false,
    });
    const savedUser = await newUser.save();

    res.json({
      msg: "Registration successful!",
      user: {
        id: savedUser._id,
        email: savedUser.email,
        twitchAccount: savedUser.twitchAccount,
        file: savedUser.image,
        isVerified: savedUser.isVerified,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
