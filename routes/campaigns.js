const express = require('express');
const router = express.Router();

router.get('/', function(req,res){
    res.send("All campaigns here");
})

router.get('/create', function(req,res){
    res.send("Create new campaign")
})

module.exports = router;