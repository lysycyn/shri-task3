const { models } = require('../../models');
const Sequelize = require('sequelize');
const moment = require('moment');

const { Op } = Sequelize;

module.exports = {
    event(root, { id }) {
        return models.Event.findById(id);
    },
    eventsByDate(root, { date }) {
        const dateStart = moment(date).startOf('day').toDate();
        const dateEnd = moment(date).endOf('day').toDate();

        return models.Event.findAll({
            where: {
                dateStart: {
                    [Op.between]: [dateStart, dateEnd],
                },
            },
        });
    },
    events(root, context) {
        return models.Event.findAll(context);
    },
    user(root, { id }) {
        return models.User.findById(id);
    },
    users(root, context) {
        return models.User.findAll(context);
    },
    room(root, { id }) {
        return models.Room.findById(id);
    },
    rooms(root, context) {
        return models.Room.findAll(context);
    },
};
