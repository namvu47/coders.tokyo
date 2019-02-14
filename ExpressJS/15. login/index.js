// MVC: controllers - contain all func from routes

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
app.use(cookieParser());

app.use(express.static('public'));

app.get('/', (req, res) => res.render('index',{
	name: "Mint"
}));

app.use('/users', authMiddleware.requireAuth, userRoutes);
app.use('/auth', authRoutes);

app.listen (port, () => console.log('Server listening at port: ' + port));