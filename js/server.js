const express = require('express');
const wol = require('node-wol');

const app = express();
const port = 9;

const macAddress = 'D4:5D:64:D5:A9:72';
const broadcastAddress = '192.168.1.51';

app.get('/wake', (req, res) => {
  wol.wake(macAddress, { address: broadcastAddress }, (error) => {
    if (error) {
      res.status(500).json({ error: 'WOL failed' });
    } else {
      res.json({ message: 'WOL packet sent successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
