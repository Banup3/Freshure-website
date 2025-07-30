const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isFirstOrder: { type: Boolean, default: true },
});

// Fix: Avoid OverwriteModelError
module.exports = mongoose.models.User || mongoose.model("User", userSchema);
