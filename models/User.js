const mongoose = require('mongoose');
const { Schema } = mongoose; // Same as writing const Schema = mongoos.Schema;

// ett schema som förklarar hur en användare ser ut
const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

// Skapar en ny kollektion som heter users (om den inte redan finns).
mongoose.model('users', userSchema);
