const dispatcher = require('./dispatcher');

const api = require('./api');

const CalendarController = require('./controllers/calendar');
const TimelineController = require('./controllers/timeline');
const DatePickerController = require('./controllers/date-picker');
const FormController = require('./controllers/form');
const HeaderController = require('./controllers/header');
const ModalController = require('./controllers/modal');

const LAYOUT_CONTAINERS = {
    calendar: '.js-layout-calendar',
    dayPicker: '.js-layout-date-picker',
    timeline: '.js-layout-timeline',
    form: '.js-layout-form',
    header: '.js-layout-header',
    modal: '.js-layout-modal',
};

class Mediator {
    constructor(appData) {
        const { rooms, events } = appData;

        this._dispatcher = dispatcher;

        this._api = api;

        const calendarEl = document.querySelectorAll(LAYOUT_CONTAINERS.calendar);
        const dayPickerEl = document.querySelectorAll(LAYOUT_CONTAINERS.dayPicker);
        const timelineElems = document.querySelectorAll(LAYOUT_CONTAINERS.timeline);
        const formEl = document.querySelectorAll(LAYOUT_CONTAINERS.form);
        const headerEl = document.querySelectorAll(LAYOUT_CONTAINERS.header);
        const modalEl = document.querySelectorAll(LAYOUT_CONTAINERS.modal);

        this._calendarController = new CalendarController(calendarEl, {
            rooms,
            events,
        });

        this._datePickerController = new DatePickerController(dayPickerEl, {});
        this._timelineController = new TimelineController(timelineElems, {});
        this._formController = new FormController(formEl, {});
        this._headerController = new HeaderController(headerEl, {});
        this._modalController = new ModalController(modalEl, {});

        this.initListeners();
    }

    initListeners() {
        this._dispatcher.on('calendar-controller:edit-event', (event) => {
            this._formController.showForm(event);
            this._headerController.toggleVisibleBtn();
        });

        this._dispatcher.on('header-view:create-event', () => {
            this._headerController.toggleVisibleBtn();
            this._formController.showForm();
        });

        this._dispatcher.on('form-view:form-close', () => {
            this._headerController.toggleVisibleBtn();
        });

        this._dispatcher.on('date-picker:date-changed', (newDate) => {
            Promise.all([
                this._api.fetchRooms(),
                this._api.fetchEvents(newDate),
            ]).then((results) => {
                const data = results.reduce((prev, curr) => Object.assign(prev, curr), {});

                this._calendarController.updateCalendar(data);
            });
        });

        this._dispatcher.on('form-view:delete-event-btn', (id) => {
            this._modalController.showDeleteMessage(id);
        });

        this._dispatcher.on('modal-view:delete-event', (id) => {
            this._calendarController.deleteEventById(id);
            this._modalController.toggleVisible();
            this._formController.toggleVisible();
            this._headerController.toggleVisibleBtn();
        });

        this._dispatcher.on('form-view:save-event', (id) => {
            
            this._modalController.showSuccessMessage(id);
        });
    }
}

module.exports = Mediator;
