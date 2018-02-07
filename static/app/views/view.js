const dispatcher = require('../dispatcher');
const _ = require('lodash');

class View {
    /**
     * Create an instance.
     *
     * @param {Object} template - Template to render
     * @param {Object} model - Model to represent
     * @param {Object} container - Container to render in
     */
    constructor(template, container) {
        this._dispatcher = dispatcher;

        this._template = template;
        this._container = container;
    }

    update(model) {
        this._model = _.cloneDeep(model);
    }

    _addEventListener(selector, event, callback) {
        document.querySelectorAll(selector).forEach((element) => {
            element.addEventListener(event, callback);
        });
    }

    _initListeners() {}

    render() {
        this._container.innerHTML = this._template(this._model);

        this._initListeners();
    }
}

module.exports = View;
