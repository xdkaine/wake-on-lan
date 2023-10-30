const express = require('express');
const wol = require('node-wol');

const app = express();
const port = 5502;

const macAddress = 'D4:5D:64:D5:A9:72';
const broadcastAddress = '192.168.1.51';

/* app.get('/wake', (req, res) => {
  wol.wake(macAddress, 
    { address: broadcastAddress }, (error) => {
    if (error) {
      res.status(500).json({ error: 'WOL failed' });
    } else {
      res.json({ message: 'WOL packet sent successfully' });
    }
  });
}); */

/* app.get('/wake', (req, res) => {
  wol.wake(macAddress);
})
 */

const cors = require('cors');

const app2 = express();
const port2 = 3002;

// Allow requests from a specific origin (replace with your website's domain)
const allowedOrigins = ['https://your-website-domain.com'];

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

app.get('/test', (req, res) => {
  res.json({ message: 'This is a test response' });
});




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
