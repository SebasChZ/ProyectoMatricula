const express = require('express');
const router = express.Router();
const path = require('path');

router.get('^/$|index(.html)', (req, res) => {
    //res.send('Hello World');
    res.sendFile(path.join(__dirname, '..','..', 'client','vite-project', 'index.html'));
}); 
module.exports = router;