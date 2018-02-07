const Controller = require('./controller');

const ModalModel = require('../models/modal');
const ModalView = require('../views/modal/modal');

const utils = require('../utils');

class ModalController extends Controller {
    constructor(container, data) {
        super(ModalModel, ModalView, container, data);
        this.renderView();
    }

    showDeleteMessage(id) {
        this._model.update({
            deleteId: id,
        });

        this.updateViewByModel();
        this.renderView();
        this.viewToggleVisible();
    }

    showSuccessMessage(event) {
        console.log('modelView:showSuccessMessage');
        console.log(event);
        const data = {
            date: utils.getDateText(event),
            floor: event.room.floor,
        };
        this.updateViewByModel(data);
        this.renderView();
    }

    toggleVisible() {
        this.viewToggleVisible();
    }
}

module.exports = ModalController;
