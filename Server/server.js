const express = require('express');
const app = express()
const path = require('path');
const logEvents = require('./middleware/logEvents');
const PORT = process.env.PORT || 3500

// custom middleware logger
app.use((req, res, next) => {
    //logEvents(`${req.method} ${req.headers.origin} ${req.url}`, 'requests.log');
    console.log(`${req.method} ${req.path}`);
    next();
});

app.use(express.urlencoded({ extended: false }));
//built-in middleware for json
app.use(express.json());
//sever static files middleware
app.use(express.static(path.join(__dirname, 'public')));



app.listen(PORT, () => console.log(`Server running on port ${PORT}`))