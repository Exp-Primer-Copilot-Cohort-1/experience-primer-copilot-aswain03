// Create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// Use body-parser to parse request body
app.use(bodyParser.json());

// Comments
app.get('/comments', (req, res) => {
  res.json([
    {
      id: 1,
        comment: 'Hello World',
    },
    {
      id: 2,
      comment: 'Hi there',
    },
    ]);
}
);