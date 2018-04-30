const express = require('express');
require('./services/passport.js');
const authRoutes = require('./routes/authRoutes.js');

const app = express();

authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
