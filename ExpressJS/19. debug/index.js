// modify package.json: "start:" nodemon --inpsect index.js
// use google chrome nodejs debug tool
// Ctr + P: open new file (auth.controller.js)
// insert break point, reload page
// remove breakpoint --> resume execution
// step over next func call: check if variable value is as expected

require('dotenv').config(); 

const express = require ('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const userRoutes = require('./routes/user.route');
const authRoutes = require('./routes/auth.route');

const authMiddleware = require('./middleware/auth.middleware');

const app = express();

const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSON_SECRET));

app.use(express.static('public'));

app.get('/', (req, res) => res.render('index',{
	name: "Mint"
}));

app.use('/users', authMiddleware.requireAuth, userRoutes);
app.use('/auth', authRoutes);

app.listen (port, () => console.log('Server listening at port: ' + port));