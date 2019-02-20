// Session: 

require('dotenv').config(); 

const express = require ('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const userRoutes = require('./routes/user.route');
const authRoutes = require('./routes/auth.route');
const productsRoutes = require('./routes/products.route');
const cartRoutes = require('./routes/cart.route.js');
const transferRoutes = require('./routes/transfer.route.js')

const authMiddleware = require('./middleware/auth.middleware');
const sessionMiddleware = require('./middleware/session.middleware.js')

const app = express();

const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSON_SECRET));
app.use(sessionMiddleware);

app.use(express.static('public'));

app.get('/', (req, res) => res.render('index',{
	name: "Mint"
}));

app.use('/users', authMiddleware.requireAuth, userRoutes);
app.use('/auth', authRoutes);
app.use('/products', productsRoutes);
app.use('/cart', cartRoutes);	
app.use('/transfer', transferRoutes);

app.listen (port, () => console.log('Server listening at port: ' + port));