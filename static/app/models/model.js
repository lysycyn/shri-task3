const dispatcher = require('../dispatcher');
const _ = require('lodash');

class Model {
    constructor() {
        this._dispatcher = dispatcher;

        this._data = {};
    }

    get data() {
        return this._data;
    }

    update(data) {
        this._data = _.cloneDeep(data);
    }
}

module.exports = Model;
