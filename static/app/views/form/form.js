const View = require('../view');
const template = require('./form.mustache');

/**
 * Class representing a Form View
 */
class FormView extends View {
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
        const form = document.querySelector('.js-form');
        const body = document.querySelector('body');
        body.style.overflow = body.style.overflow === 'hidden' ? 'auto' : 'hidden';
        if (form.classList.contains('form_visible')) {
            form.classList.remove('form_visible');
        } else {
            form.classList.add('form_visible');
        }
    }

    _initListeners() {
        this._addEventListener('.js-form-close', 'click', () => {
            this.toggleVisible();
            this._dispatcher.trigger('form-view:form-close');
        });

        this._addEventListener('.js-delete-event-btn', 'click', (event) => {
            this._dispatcher.trigger(
                'form-view:delete-event-btn',
                event.target.attributes['data-event-id'].value,
            );
        });

        this._addEventListener('.js-save-event', 'click', () => {
            this._dispatcher.trigger('form-view:save-event');
        });

        this._addEventListener('.js-create-event', 'click', () => {
            this._dispatcher.trigger('form-view:create-event');
        });
    }
}

module.exports = FormView;
