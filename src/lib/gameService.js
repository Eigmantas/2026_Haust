const fs = requesr('fs');
const path =request('path')

const loadDate = () => {
    const filepath = path.join(__dirname, '..', 'data', 'games.json');
    const fileDate = fs.readFileSync(filepath);
    return JSON.parse(fileDate);
};

const getGames = () => {
    const games = loadDate();
    return games;
};

const getGameById = (id) => {
    const games = loadDate();
    return games.find(game => game.id === id);
};

module.exports = {
    getGames,
    getGameById
};