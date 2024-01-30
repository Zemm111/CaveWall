const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Choose a port of your preference

// Middleware to parse JSON data from POST requests
app.use(bodyParser.json());

// Endpoint to handle Warpcast POST requests
app.post('/frame.html', (req, res) => {
    // Extract data from the request
    const buttonId = req.body.buttonId;
    const userId = req.body.userId;
    const untrustedData = req.body.untrustedData;
    const trustedData = req.body.trustedData;

    // Handle the data as needed, and return a response if necessary

    // For demonstration purposes, log the data
    console.log('Button ID:', buttonId);
    console.log('User ID:', userId);
    console.log('Untrusted Data:', untrustedData);
    console.log('Trusted Data:', trustedData);

    // Send a response (optional)
    res.send('POST request received successfully');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
