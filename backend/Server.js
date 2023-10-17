const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./routes/TaskRoute');
const cors = require('cors');
require('./passport')
const cookieSession = require('cookie-session');
const passportSetup = require('./passport');
const passport = require('passport');
const authRoute = require('./routes/auth');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
// app.use(cors());

app.use(cookieSession(
    {name: 'session',
    keys: ['key'],
    maxAge: 24 * 60 * 60 * 100

}))

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: 'http://localhost:3000',
    methods:"GET,POST,PUT,DELETE",
    credentials: true
}
))

app.use('/auth', authRoute);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

    app.use("/api",routes);


app.listen(PORT, () => console.log(`The server has started at port${PORT}`));