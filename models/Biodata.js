const mongoose = require("mongoose")

const schema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  emailBackup: String,
  phoneNumber: String,
  gender: Boolean,
  profilePicture: String,
  birthDate: Date
})

module.exports = mongoose.model('Biodata', schema, 'biodata')