const View = require('../view');
const template = require('./timeline.mustache');

const utils = require('../../utils');

const { ONE_MINUTE_LENGTH_PERCENTS } = require('../../constants');


/**
 * Class representing a Timeline View
 */
class TimelineView extends View {
    /**
     * Create an instance.
     *
     * @param {Object} container - Container to render in
     * @param {Object} model - Model to represent
     */
    constructor(container, model) {
        super(template, container, model);
        this.render();

        this.update(model);
    }

    update(model) {
        super.update(model);

        const date = this._model.currentTime;

        let offset = 0;
        console.log(date.getHours());
        if (date.getHours() >= 8 && date.getHours() < 23) {
            const offsetMinutes = ((date.getHours() - 8) * 60) + date.getMinutes();
            // 3.125% - первый отступ до 8 утра, 24px - середина currentTime
            offset = `calc(3.125% + ${(offsetMinutes * ONE_MINUTE_LENGTH_PERCENTS).toFixed(3)}% - 24px)`;
        }

        if (date.getHours() >= 23) {
            this._dispatcher.trigger('timeline-controller:setTime');
        }

        this._model.currentTime = utils.getTimeText(date);
        this._model.currentTimeOffset = offset;
    }
}

module.exports = TimelineView;
