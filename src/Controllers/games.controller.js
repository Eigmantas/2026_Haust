const gameService = require('../lib/movieService');

const index = (req, res) => {
    const games = gameService.getGames();
    res.render('index', { title: 'Bíóvefurinn', games });
};


const detail = (req, res) => {
    const { id } = req.params; 
    const game = gameService.getGameById(id);

    if (!game) {
      
        return res.status(404).render('404', { title: 'Síða fannst ekki' });
    }

    res.render('game-details', { title: game.title, game });
};

module.exports = {
    index,
    detail
};