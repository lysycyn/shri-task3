const Controller = require('./controller');

const TimelineModel = require('../models/timeline');
const TimelineView = require('../views/timeline/timeline');

class TimelineController extends Controller {
    constructor(container, data) {
        super(TimelineModel, TimelineView, container, data);

        setInterval(() => this.setTime(), 60000);

        this.renderView();
    }

    setTime() {
        this._model.setCurrentTime();
        this.updateViewByModel();
        this.renderView();
    }
}

module.exports = TimelineController;
