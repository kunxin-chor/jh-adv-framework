const express = require('express');

// require in handlebars for express
const hbs = require('hbs');
const waxOn = require('wax-on');
waxOn.on(hbs.handlebars);
waxOn.setLayoutPath('./views/layouts');

let app = express();
app.set('view engine', 'hbs');


const landingRoutes = require('./routes/landing');

app.use('', landingRoutes);
app.use('/campaigns', require('./routes/campaigns'));

app.listen(3000, function(){
    console.log("The server has started")
})