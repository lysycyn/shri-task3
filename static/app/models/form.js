const _ = require('lodash');

const Model = require('./model');

const utils = require('../utils');
/**
 * Class representing a Form Model.
 */
class FormModel extends Model {
    constructor() {
        super();
        this._data = {};
    }

    update(event = null) {
        if (event == null) {
            this._data = {};
            return;
        }
        this._data.id = event.id;
        this._data.title = event.title;
        this._data.users = _.cloneDeep(event.users);
        this._data.room = _.cloneDeep(event.room);
        this._data.date = utils.getDateText(event.dateStart, false, true);
        this._data.startTime = utils.getTimeText(event.dateStart);
        this._data.endTime = utils.getTimeText(event.dateEnd);
    }
}

module.exports = FormModel;
