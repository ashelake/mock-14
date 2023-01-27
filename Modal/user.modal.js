const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: String,
  score: String,
  level: String,
});

const UserModal = mongoose.model("mock-xiv-data", UserSchema);

module.exports = UserModal;
