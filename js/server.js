const express = require('express');

const wol = require('node-wol')

const cors = require('cors');

const port2 = 3300;

const app = express();

const macAddress = 'D4:5D:64:D5:A9:72';
const broadcastAddress = '192.168.1.51';

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
app.use(cors(corsOptions));

// ... Define your routes and other server code ...

app.listen(port2, () => {
  console.log('Server is running on port ', port2);
});

app.get('/wake', (req, res) => {
  wol.wake(macAddress, { address: broadcastAddress }, (error) => {
    if (error) {
      console.error('WOL failed:', error);
      res.status(500).json({ error: 'WOL failed' });
    } else {
      console.log('WOL packet sent successfully');
      res.status(200).json({ message: 'WOL packet sent successfully' });
    }
  });
});