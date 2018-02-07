const HOST = 'http://localhost:3000';

class API {
    _sendGraphQLRequest(query) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();

            xhr.responseType = 'json';
            xhr.open("POST", `${HOST}/graphql`);

            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("Accept", "application/json");

            xhr.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(xhr.response.data);
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

    fetchEvents(date) {
        return this._sendGraphQLRequest(`{
            events: eventsByDate(date: "${date.toISOString()}") {
                id
                title
                dateStart
                dateEnd
                users {
                    id
                    login
                    homeFloor
                    avatarUrl
                }
                room {
                    id
                    title
                    capacity
                    floor
                }
            }
        }`);
    }

    fetchRooms() {
        return this._sendGraphQLRequest(`{
            rooms {
                id
                title
                capacity
                floor
            }
        }`);
    }
}

const api = new API();

module.exports = api;
