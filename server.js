const express = require('express');
const path = require('path');
const fs = require('fs')

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static(path.join(__dirname, 'public')));

const getGames = () => {
  const data = fs.readFileSync(path.join(__dirname, 'src/data/games.json'));
  return JSON.parse(data);
};

app.get('/', (req, res) => {
  const games = getGames();
  res.render('index', { title: 'Games', games});
});

app.get('/game/:id', (req, res) => {
  const games = getGames();
  const game  = games.find(g => g.id === req.params.id);

   if (!game) {
    return res.status(404).render('404', { title: 'Síða fannst ekki' });
  }

   res.render('game-details', { title: game.title, game });
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { title: 'Eigmantas' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'Eigmantas' });
});

app.use((req, res) => {
  res.status(404).send('Síða fannst ekki (404)');
});

app.listen(PORT, () => {
  console.log(`Server keyrir á http://localhost:${PORT}`);
});