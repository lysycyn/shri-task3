const View = require('../view');
const template = require('./modal.mustache');

/**
 * Class representing a Modal View
 */
class ModalView extends View {
    /**
     * Create an instance.
     *
     * @param {Object} container - Container to render in
     * @param {Object} model - Model to represent
     */
    constructor(container, model) {
        super(template, container, model);

        this.update(model);
    }

    toggleVisible() {
        const modal = document.querySelector('.js-modal');
        if (modal.classList.contains('modal_visible')) {
            modal.classList.remove('modal_visible');
        } else {
            modal.classList.add('modal_visible');
        }
    }

    _initListeners() {
        this._addEventListener('.js-modal-cancel', 'click', () => {
            this.toggleVisible();
        });

        this._addEventListener('.js-modal-overlay', 'click', () => {
            this.toggleVisible();
        });

        this._addEventListener('.js-modal-delete-event', 'click', (id) => {
            this._dispatcher.trigger('modal-view:delete-event', id);
        });
    }
}

module.exports = ModalView;
