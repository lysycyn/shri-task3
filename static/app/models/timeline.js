const Model = require('./model');

class TimelineModel extends Model {
    constructor() {
        super();
        this._data.currentTime = new Date();
    }

    setCurrentTime() {
        this._data.currentTime = new Date();
    }
}

module.exports = TimelineModel;
