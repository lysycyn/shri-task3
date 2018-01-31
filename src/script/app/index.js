const API = require('./api.js');

(() => {
    const api = new API();

    Promise.all([
        api.fetchRooms(),
        api.fetchEvents()
    ]).then((results) => {
        console.log('RESULTS:', results);
    });
})();
