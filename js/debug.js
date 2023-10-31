const express = require('express');

const cors = require('cors');

const port2 = 3301;

const app2 = express();

// Allow requests from a specific origin (replace with your website's domain)
const allowedOrigins = ['http://127.0.0.1:5502'];

// CORS middleware configuration
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

// Use CORS middleware
app2.use(cors(corsOptions));

// ... Define your routes and other server code ...

app2.listen(port2, () => {
  console.log('Server is running on port ', port2);
});

app2.get('/test', (req, res) => {
    res.json({ message: 'This is a test response' });
  });