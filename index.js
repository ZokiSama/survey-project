const express = require('express');
const mongoose = require('mongoose');
require('./services/passport.js');

const keys = require('./config/keys.js');
mongoose.connect(keys.mongoURI);

const authRoutes = require('./routes/authRoutes.js');

const app = express();

authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
