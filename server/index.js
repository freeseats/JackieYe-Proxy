const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// 3010 Reviews
// 3020 Reservations
// 3030 topbar
// 3040 Me
// 3050 photos

// pathing issue, use the absolute path
app.use(express.static('public'));

app.get('/:id', (req, res) => {
  if (!req.params.id) {
    res.status(400);
    res.end();
  } else {
    res.sendFile('index.html', { root: path.resolve(__dirname, '../public') });
  }
});

app.listen(port, function() {
  console.log(`listening on port ${port} !!`);
});