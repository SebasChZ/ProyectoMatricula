require('dotenv').config();
const express = require('express');
const app = express()
const erorrHandler = require('./middleware/erorrHandler');
const corsOptions = require('./config/corsOptions');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3500;





app.use(cors(corsOptions));

// built-in middleware to handle urlencoded data
// in other words, form data:  
// ‘content-type: application/x-www-form-urlencoded’
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

//built-in middleware to parse cookies
app.use(cookieParser());

//serve static classSingleton

//routers
app.use('/login', require('./routes/api/userRouter'));
app.use('/professor', require('./routes/api/professorRouter'));
app.use('/student', require('./routes/api/studentRouter'));



//custom middleware of error handling
app.use(erorrHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

//nuevo objeto jason usario apellido
