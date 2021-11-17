const express = require('express');
// create a new router object
// so, a router can contain routes
const router = express.Router();

router.get('/', function(req,res){
    res.render('landing/index');
})

router.get('/about', function(req,res){
    res.render('landing/about')
})

router.get('/contact-us', function(req,res){
    res.send("Contact us");
})

// export out the router object
// same in React `export default ... `
module.exports = router;