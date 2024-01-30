// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 8080; // Choose a port of your preference

// // Middleware to parse JSON data from POST requests
// app.use(bodyParser.json());

// // Endpoint to handle Warpcast POST requests
// app.post('/frame.html', (req, res) => {
//     // Extract data from the request
//     const buttonId = req.body.buttonId;
//     const userId = req.body.userId;
//     const untrustedData = req.body.untrustedData;
//     const trustedData = req.body.trustedData;

//     // Handle the data as needed, and return a response if necessary

//     // For demonstration purposes, log the data
//     console.log('Button ID:', buttonId);
//     console.log('User ID:', userId);
//     console.log('Untrusted Data:', untrustedData);
//     console.log('Trusted Data:', trustedData);

//     // Send a response (optional)
//     res.send('POST request received successfully');
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 8080; // Choose a port of your preference

// Middleware to parse URL-encoded form data from POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to handle POST requests
app.post('/frame.html', (req, res) => {
    // Log the entire request object
    console.log('Received POST request:', req);

    // Send a response (optional)
    res.send('POST request received successfully');
});

// Serve the frame.html file statically
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

