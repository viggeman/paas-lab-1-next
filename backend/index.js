const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.get('/api', (_request, response) => {
  response.send({ hello: 'World' });
});

app.use(express.static(path.join(path.resolve(), 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(path.resolve(), 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`);
});
