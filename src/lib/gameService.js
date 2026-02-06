const fs = require('fs');
const path =require('path');

const loadDate = () => {
    const filePath = path.join(__dirname, '../data/games.json');
    const fileDate = fs.readFileSync(filePath);
    return JSON.parse(fileDate);
};

const getGames = () => {
    const games = loadDate();
    return games;
};

const getGameById = (id) => {
    const games = loadDate();
    return games.find((g) => g.id === id);
};

module.exports = {
    getGames,
    getGameById
};