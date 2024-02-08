const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    // required: true,
  },
  state: {
    type: String,
    // required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;

// },{timestamps:true})
