const { Mediator } = require('mediator-js/lib/mediator');

const dispatcher = new Mediator();

const dispatcherSingleton = () => dispatcher;

module.exports = dispatcherSingleton();
