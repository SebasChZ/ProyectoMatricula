require('dotenv').config();
const express = require('express');
const app = express()
const path = require('path');
const erorrHandler = require('./middleware/erorrHandler');
const cors = require('cors');
const controller = require('./controllers/MainController');
const PORT = process.env.PORT || 3500;



//Cross Origin Resource Sharing
const whiteList = ['http://localhost:5173', 'http://localhost:3500']
const corsOptions = {
    origin: (origin, callback) =>{
        if (whiteList.indexOf(origin) !== -1 ) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }, 
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded data
// in other words, form data:  
// ‘content-type: application/x-www-form-urlencoded’
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

//serve static files
//app.use(express.static(path.join(__dirname, '..', 'client', 'vite-project')))

//This will be route any request comming from client 
//app.use('/client/*', require('./routes/subdir.js'));

//routers
//app.use('/user', require('./routes/api/user'));

app.post('/login', async(req, res) => {
    //nuevo usuario formato json
    const objetoJson = {"name":"John", "age":30, "city":"New York"};

    const { email, password } = req.body;
    console.log(email, password);
   
    //await logEvents(message, logName);
    res.send('false');

});

//custom middleware of error handling
app.use(erorrHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

//nuevo objeto jason usario apellido
