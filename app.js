// Call and config dotenv
import dotenv from 'dotenv';
dotenv.config();
// Express Imports
import express from 'express';

// Import Routes Here
import { homeRoute } from './servers/server.js';

// Initialise express App
const App = express();

// Set Process Evn for Dotenv
const PORT = process.env.PORT || 5050;

// Connect MongoDB with Moongose 

// Set Express Apps
App.set('view engine', 'ejs');

// Use Express Apps
App.use(express.static('public'));
App.use(express.json())

// Initialise Routes/Pages
App.use('/', homeRoute);


// Server Listen and can wrap server with Database in the future...
App.listen(PORT, (err) => {
    if (err) throw err;
    else
    console.log(`Server runing on port: http://localhost:${PORT}`);
});

// Set Error Handlers Here if more.
App.use((req, res) => {
    res.status(404).render('404', {title: '404'})
});