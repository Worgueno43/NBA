function chooseImage (item) {
    switch (item) {
        case 'Celtics':
            return require('../img/NBA/Celtics.png');
        case '76ers':
            return require('../img/NBA/76ers.png');
        case 'Cavaliers':
            return require('../img/NBA/Cavaliers.png');
        case 'Clippers':
            return require('../img/NBA/Clippers.png');
        case 'Hornets':
            return require('../img/NBA/Hornets.png');
        case 'Nuggets':
            return require('../img/NBA/Nuggets.png');
        case 'Raptors':
            return require('../img/NBA/Raptors.png');
        case 'Wizards':
            return require('../img/NBA/Wizards.png');
        case 'Bulls':
            return require('../img/NBA/Bulls.png');
        case 'Heat':
            return require('../img/NBA/Heat.png');
        case 'Kings':
            return require('../img/NBA/Kings.png');
        case 'Lakers':
            return require('../img/NBA/Lakers.png');
        case 'Pelicans':
            return require('../img/NBA/Pelicans.png');
        case 'Pistons':
            return require('../img/NBA/Pistons.png');
        case 'Rockets':
            return require('../img/NBA/Rockets.png');
        case 'Timberwolves':
            return require('../img/NBA/Timberwolves.png');
        default:
            return require('../img/NBA/nopic.png')
    }
}

export { chooseImage }