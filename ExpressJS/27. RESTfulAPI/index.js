// RESTfulAPI: an application program interface (API) that uses HTTP requests to GET, PUT, POST and DELETE data.
// use AUTHENTICATION HEADER, not cookie
    // Create — POST
    // Read/Retrieve — GET
    // Update — PUT/PATCH (https://medium.com/backticks-tildes/restful-api-design-put-vs-patch-4a061aa3ed0b)
    	// PUT: replace entire entity - useful for major updates
    	// PATCH: replace part of entiry
    		// make minor updates to our resources (houses) - window, color, ... That is, it PATCHES the resource — changing its properties,
    // Delete — DELETE

require('dotenv').config(); 

const express = require ('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const csrf = require('csurf');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

const userRoutes = require('./routes/user.route');
const authRoutes = require('./routes/auth.route');
const productsRoutes = require('./routes/products.route');
const cartRoutes = require('./routes/cart.route.js');
const transferRoutes = require('./routes/transfer.route.js')

const apiProductsRoute = require('./api/routes/products.route.js');

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
// app.use(csrf({ cookie: true }));

app.use(express.static('public'));

app.get('/', (req, res) => res.render('index',{
	name: "Mint"
}));

app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/products', productsRoutes);
app.use('/cart', cartRoutes);	
app.use('/transfer',authMiddleware.requireAuth, transferRoutes);

app.use('/api/products', apiProductsRoute);

app.listen (port, () => console.log('Server listening at port: ' + port));