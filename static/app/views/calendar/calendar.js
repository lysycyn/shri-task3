const _ = require('lodash');

const View = require('../view');
const template = require('./calendar.mustache');

const utils = require('../../utils');

const { ONE_MINUTE_LENGTH_PERCENTS } = require('../../constants');

/**
 * Class representing a Calendar View
 */
class CalendarView extends View {
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

    update(model) {
        super.update(model);

        const rows = this._model.rows.map((row) => {
            const rowExtended = Object.assign(row);
            rowExtended.roomCapacity = `${row.room.capacity} ${utils.plural(row.room.capacity, [
                'человек',
                'человека',
                'человек',
            ])}`;

            rowExtended.events = rowExtended.events.map((event) => {
                const { dateEnd, dateStart, users } = event;

                const durationMinutes = (dateEnd - dateStart) / 1000 / 60;
                const offsetMinutes = ((dateEnd.getHours() - 8) * 60) + dateEnd.getMinutes();

                const left = (offsetMinutes * ONE_MINUTE_LENGTH_PERCENTS).toFixed(3);
                const width = (durationMinutes * ONE_MINUTE_LENGTH_PERCENTS).toFixed(3);

                const dateText = utils.getDateText(dateStart);
                const startTimeText = utils.getTimeText(dateStart);
                const endTimeText = utils.getTimeText(dateEnd);
                const participantName = users[0].login;
                const participantAvatar = users[0].avatarUrl;


                const participantsPlural = utils.plural(users.length - 1, [
                    'участник',
                    'участника',
                    'участников',
                ]);

                const participantsCountText = `и ещё ${users.length - 1} ${participantsPlural}`;

                return {
                    id: event.id,
                    title: event.title,
                    left,
                    width,
                    dateText,
                    startTimeText,
                    endTimeText,
                    participantName,
                    participantAvatar,
                    participantsCountText,
                };
            });

            return rowExtended;
        });

        const floors = [];

        rows.map((row) => {
            if (floors.find(floor => floor.number === row.room.floor)) {
                floors.find(floor => floor.number === row.room.floor).rows.push(row);
            } else {
                floors.push({
                    number: row.room.floor,
                    rows: [],
                });
                floors.find(floor => floor.number === row.room.floor).rows.push(row);
            }
        });

        this._model.floors = floors.sort((a, b) => a.floor > b.floor);
    }

    /**
     * Hide toolip on click
     */
    hideTooltip() {
        const tooltipVisible = document.querySelector('.tooltip_visible');

        if (tooltipVisible) {
            tooltipVisible.classList.remove('tooltip_visible');
        }
    }

    /**
     * Toggle Tooltip on click
     * @param {Object} event - event
     */
    toggleTooltip(event) {
        event.stopPropagation();

        if (!event.target.matches('.js-tooltip-trigger')) {
            return;
        }

        this.hideTooltip();

        event.target.querySelector('.tooltip').classList.add('tooltip_visible');
    }

    _initListeners() {
        this._addEventListener('.js-tooltip-trigger', 'click', (event) => {
            this.toggleTooltip(event);
        });

        this._addEventListener('body', 'click', (event) => {
            this.hideTooltip(event);
        });

        this._addEventListener('.js-event-edit', 'click', (e) => {
            this._dispatcher.trigger(
                'calendar-view:edit-event',
                e.target.attributes['data-event-id'].value,
            );
        });
    }
}

module.exports = CalendarView;
