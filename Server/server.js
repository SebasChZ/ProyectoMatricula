require('dotenv').config();
const express = require('express');
const app = express()
const path = require('path');
const erorrHandler = require('./middleware/erorrHandler');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const controller = require('./controllers/MainController');
const PORT = process.env.PORT || 3500;




app.use(cors(corsOptions));

// built-in middleware to handle urlencoded data
// in other words, form data:  
// ‘content-type: application/x-www-form-urlencoded’
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

//serve static files
//app.use(express.static(path.join(__dirname, '..', 'client', 'vite-project')))

//routers
app.use('/professor', require('./routes/api/professor'));
app.use('/newUser', require('./routes/api/user'));

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
