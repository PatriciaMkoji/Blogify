/* Implements User models */

const mongoose = require('mongoose'); /* Imports mongoose */
const bcrypt = require('bcryptjs');

/* Defines Schema(BluePrint) for a user */
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

/* Hash the password */
// userSchema.pre('save', async function(next) {
//   try {
//     if (!this.isModified('password')) {
//       return next();
//     }
//     const hashedPassword = await bcrypt.hash(this.password, 10);
//     this.password = hashedPassword;
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

/* Crestes a mongoose model named'User' */
const User = mongoose.model('User', userSchema);

/* Exports 'User' model to be used in other parts of application */
module.exports = User;
