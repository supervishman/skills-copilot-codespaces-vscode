// create web server
const express = require('express');
const app = express();
const port = 3000;

// Load comments data
const comments = require('./comments.json');

// Route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Route to get comments by id
app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = comments.find(comment => comment.id === parseInt(id));
  if (comment) {
    res.json(comment);
  } else {
    res.json({ message: `Comment with id ${id} not found` });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
// Now you can start the server by running the following command:
// $ node comments.js
// And you can access the comments data at http://localhost:3000/comments.
// To get a specific comment, you can use the comment id, like http://localhost:3000/comments/1.
// In the next section, we will create a simple frontend to display the