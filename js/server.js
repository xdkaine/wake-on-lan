const express = require('express');
const wol = require('node-wol');

const app = express();
const port = 3302;

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


app.listen(port, () => {
  console.log(`App2 Server is running on http://localhost:${port}`);
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