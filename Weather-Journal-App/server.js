// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Express to run server and routes
//returns a function reference. that function is called with express()
const express = require('express');
// Start up an instance of app
//object returned by express()
const app = express()
/* Dependencies */
/* Middleware*/
const bodyParser = require('body-parser')

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
// for browser and server talk to each other

const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'))


// Callback function to complete GET '/all'
const RetriveData = (req, res) => {
    res.send(projectData)

    console.log(projectData)

}
app.get('/all', RetriveData)



// Post Route

//add a POST route that adds incoming data to projectData.
app.post('/add', addData)

function addData (req, res) {
    projectData["temp"] = req.body.temp,
    projectData["date"] = req.body.date,
    projectData["content"] = req.body.content,
    projectData["city"] = req.body.city,



    res.send(projectData)

    console.log(projectData)
}





// Spin up the server
const port = 8000;
// Spin up the server
const server = app.listen(port, listening)

// Callback to debug
function listening() {
    console.log('server running')
    console.log(`running on localhost: ${port}`);

}
