const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// pathing issue, use the absolute path
// app.use(express.static(path.resolve(__dirname, '/public')));
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