const express = require("express");
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require("./config/keys");
require('./models/User');
require('./services/passport');

mongoose.connect(keys.databaseKey);

require('./services/passport');
require('./models/User');

const app = express();

app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKeys]
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

require('./routes/authtRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);
