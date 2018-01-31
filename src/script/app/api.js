const REQUESTS = require('./requests.js');
const HOST = 'http://localhost:3000';

class API {
    constructor() {
    }

    _sendGraphQLRequest(query) {
        return new Promise(function (resolve, reject) {
            let xhr = new XMLHttpRequest();

            xhr.responseType = 'json';
            xhr.open("POST", `${HOST}/graphql`);

            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("Accept", "application/json");

            xhr.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject({
                        status: this.status,
                        statusText: xhr.statusText
                    });
                }
            };

            xhr.onerror = function () {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            };

            xhr.send(JSON.stringify({query: query}));
        });
    }

    fetchEvents() {
        return this._sendGraphQLRequest(REQUESTS.events);
    }

    fetchRooms() {
        return this._sendGraphQLRequest(REQUESTS.rooms);
    }
}

module.exports = API;
