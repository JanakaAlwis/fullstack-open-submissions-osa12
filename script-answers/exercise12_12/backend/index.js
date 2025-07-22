const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('build'));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend' });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
