// Open Movie Data Base Movie API
import express from 'express';
import { OMDb_key } from './keys.js';
import axios from 'axios';

const app = express();
const port = process.env.PORT || 5000;

let title = 'Frozen';

app.get('/', (req, res) => {
  res.render('index.html');
});

app.get('/results', (req, res) => {
  res.send(title);
});

axios
  .get(`http://www.omdbapi.com/?apikey=${OMDb_key}&t=${title}`)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log("didn't work");
  });

app.listen(port, () => {
  console.log('Server is live!');
});
