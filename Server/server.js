require('dotenv').config();
const express = require('express');
const app = express()
const path = require('path');
const erorrHandler = require('./middleware/erorrHandler');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const singletonConnexion = require('./controllers/SingeltonConnexion');
const PORT = process.env.PORT || 3500;




app.use(cors(corsOptions));

// built-in middleware to handle urlencoded data
// in other words, form data:  
// ‘content-type: application/x-www-form-urlencoded’
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

//serve static classSingleton

//routers
app.use('/login', require('./routes/api/userRouter'));
app.use('/professor', require('./routes/api/professorRouter'));



//custom middleware of error handling
app.use(erorrHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

//nuevo objeto jason usario apellido
