const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    index: true,
  },
  // vartotojo slaptažodis
  password: { type: String },
  twitchAccount: { type: String },
  image: { type: String },
  isVerified: { type: Boolean, default: false },
});

module.exports = {
  User: mongoose.model("User", userSchema),
  userSchema: userSchema,
};
