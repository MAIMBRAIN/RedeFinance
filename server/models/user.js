const mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String
});

// adds method to user to create hashed password
userSchema.methods.generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

// adds method to user to check if password is correct
userSchema.methods.validPassword = (password) => {
    return bcrypt.compareSync(password, bcrypt.genSaltSync(8));
};

// had to add this, checks if password was changed before saving
userSchema.pre('save', (next) => {
    if(this.isModified('password')) {
        this.password = this.generateHash(this.password);
    }
    next();
});

const User = mongoose.model('user', UserSchema);
module.exports = User;