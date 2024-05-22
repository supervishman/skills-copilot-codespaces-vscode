// create web server
// 1. require express
const express = require('express');
// 2. create an express application
const app = express();
// 3. create a port number
const port = 3000;

// 4. create an array of comments
const comments = [
  { username: 'Alice', comment: 'I love cats!' },
  { username: 'Bob', comment: 'I love dogs!' },
  { username: 'Charlie', comment: 'I love parrots!' }
];

// 5. create a route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// 6. create a route to get a comment by id
app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  if (id < comments.length) {
    res.json(comments[id]);
  } else {
    res.json({ error: 'Comment not found' });
  }
});

// 7. start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});