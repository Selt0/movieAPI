// Open Movie Data Base Movie API
import express from 'express';
import { OMDb_key } from './keys.js';
import axios from 'axios';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

let title = 'the incredibles';
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/results', (req, res) => {
  axios
    .get(`http://www.omdbapi.com/?apikey=${OMDb_key}&s=${title}`)
    .then((response) => {
      res.render('results', { movies: response.data['Search'] });
    })
    .catch((error) => {
      res.send('There was an unexpected error :(');
      console.log(error);
    });
});

app.post('/search', (req, res) => {
  title = req.body.title;
  res.redirect('/results');
});

app.listen(port, () => {
  console.log('Server is live!');
});
