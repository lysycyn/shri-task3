const Controller = require('./controller');

const HeaderModel = require('../models/header');
const HeaderView = require('../views/header/header');

class HeaderController extends Controller {
    constructor(container, data) {
        super(HeaderModel, HeaderView, container, data);
        this.renderView();
    }

    toggleVisibleBtn() {
        const header = document.querySelector('.js-header');
        if (header.classList.contains('header_no-btn')) {
            header.classList.remove('header_no-btn');
        } else {
            header.classList.add('header_no-btn');
        }
    }
}

module.exports = HeaderController;
