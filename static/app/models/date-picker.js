const Model = require('./model');

/**
 * Class representing a DatePicker Model.
 */
class DatePickerModel extends Model {
    /**
     * Create a model.
     * @param {Object} data - data to represent
     */
    constructor() {
        super();

        this._data.current = new Date();
    }

    get currentDay() {
        return this._data.current;
    }

    /**
     * Increment day in label.
     */
    incrementDay() {
        this._data.current.setDate(this._data.current.getDate() + 1);
    }

    /**
     * Decrement day in label.
     */
    decrementDay() {
        this._data.current.setDate(this._data.current.getDate() - 1);
    }
}

module.exports = DatePickerModel;
