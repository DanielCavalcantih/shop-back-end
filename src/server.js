require('dotenv').config();
const app = require('./app');

const port = process.env.API_PORT || 3001;

app.get('/', (_req, res) => {
  res.send("Olá Daniel!");
});

app.listen(port, () => console.log('ouvindo porta', port));