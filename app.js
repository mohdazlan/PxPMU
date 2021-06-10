const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { resolve } = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const bodyParser = require('body-parser');
const stripe = require('stripe')(
  'sk_test_51Il1z9IzU5fOmsJUQwQMy5C5qBk36695D9cyVmuZRGL7r68AQS68e5pMOBfqlx4CeimbyAmpqAmv6XSjkBwRxedr00etUBD5tO'
);

let adminRouter = require('./routes/adminRoutes');
let indexRouter = require('./routes/indexRoutes');
let usersRouter = require('./routes/userRoutes');
const passport = require('passport');
const Project = require('./models/projectModel');
var path = require('path');

var public = path.join(__dirname, 'public');

const app = express();

require('./controllers/passport')(passport);

const router = express.Router();

// EJS setup
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Set Static Folder
app.use(express.static(path.join(__dirname, '/public')));

// Connect flash
app.use(flash());
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Bodyparser
app.use(express.urlencoded({ extended: false }));

// Global Vars
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

app.use('/', indexRouter);
app.use('/users/', usersRouter);
app.use('/admin/', adminRouter);

app.get('/projects', async (req, res) => {
  let projects = await Project.find();
  res.send(projects);
});
module.exports = app;
