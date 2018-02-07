const { models, sequelize } = require('./models');

function createData() {
    const usersPromise = models.User.bulkCreate([
        {
            login: 'veged',
            avatarUrl: 'https://avatars3.githubusercontent.com/u/15365?s=460&v=4',
            homeFloor: 0,
        },
        {
            login: 'alt-j',
            avatarUrl: 'https://avatars1.githubusercontent.com/u/3763844?s=400&v=4',
            homeFloor: 3,
        },
        {
            login: 'yeti-or',
            avatarUrl: 'https://avatars0.githubusercontent.com/u/1813468?s=460&v=4',
            homeFloor: 2,
        },
        {
            login: 'Thomas Anderson',
            avatarUrl: 'https://smart-lab.ru/uploads/images/01/30/11/2015/02/06/avatar_aecd1c_100x100.jpg',
            homeFloor: 4,
        },
        {
            login: 'Klark Kent',
            avatarUrl: 'http://kards.qip.ru/images/avatar/0e/5a/88590.png',
            homeFloor: 2,
        },
        {
            login: 'Kenobi',
            avatarUrl: 'http://kards.qip.ru/images/avatar/01/93/103169.jpg',
            homeFloor: 1,
        },
    ]);

    const roomsPromise = models.Room.bulkCreate([
        {
            title: '404',
            capacity: 5,
            floor: 4,
        },
        {
            title: 'Деньги',
            capacity: 4,
            floor: 2,
        },
        {
            title: 'Карты',
            capacity: 4,
            floor: 2,
        },
        {
            title: 'Ствола',
            capacity: 2,
            floor: 2,
        },
        {
            title: '14',
            capacity: 6,
            floor: 3,
        },
        {
            title: 'Ржавый Фред',
            capacity: 6,
            floor: 7,
        },
        {
            title: 'Прачечная',
            capacity: 10,
            floor: 7,
        },
        {
            title: 'Желтый дом',
            capacity: 10,
            floor: 7,
        },
        {
            title: 'Оранжевый тюльпан',
            capacity: 10,
            floor: 7,
        },
        {
            title: 'Джокер',
            capacity: 10,
            floor: 6,
        },
        {
            title: 'Мариванна',
            capacity: 10,
            floor: 6,
        },
        {
            title: 'Тонкий Боб',
            capacity: 10,
            floor: 6,
        },
        {
            title: 'Черная вдова',
            capacity: 10,
            floor: 6,
        },
        {
            title: 'Белорусский ликер',
            capacity: 10,
            floor: 6,
        },
    ]);

    const HOUR = 60 * 60 * 1000;
    const HALFHOUR = 30 * 60 * 1000;
    const QUARTER = 15 * 60 * 1000;
    const THREEQUARTERS = 45 * 60 * 1000;
    const DAY = 24 * 60 * 60 * 1000;
    const now = new Date();
    now.setHours(12);
    const oneHourLater = new Date(now.getTime() + HOUR);
    const twoHoursLater = new Date(oneHourLater.getTime() + HOUR);
    const threeHoursLater = new Date(twoHoursLater.getTime() + HOUR);
    const fourHoursLater = new Date(threeHoursLater.getTime() + HOUR);
    const fiveHoursLater = new Date(fourHoursLater.getTime() + HOUR);

    const tomorrow = new Date(now.getTime() + DAY);
    const tomorrowOneHourLater = new Date(now.getTime() + DAY + HOUR);
    const tomorrowTwoHoursLater = new Date(tomorrowOneHourLater.getTime() + HOUR);
    const tomorrowThreeHoursLater = new Date(tomorrowTwoHoursLater.getTime() + HOUR);

    const eventsPromise = models.Event.bulkCreate([
        // первая переговорка
        {
            title: 'ШРИ 2018 - начало',
            dateStart: now,
            dateEnd: new Date(now.getTime() + HALFHOUR),
        },
        {
            title: '👾 Хакатон 👾',
            dateStart: new Date(now.getTime() + THREEQUARTERS),
            dateEnd: oneHourLater,
        },
        {
            title: '🍨 Пробуем kefir.js',
            dateStart: new Date(oneHourLater.getTime() + QUARTER),
            dateEnd: threeHoursLater,
        },
        {
            title: 'Встреча 1',
            dateStart: new Date(threeHoursLater.getTime() + HALFHOUR),
            dateEnd: new Date(fourHoursLater.getTime() + HOUR + QUARTER),
        },
        {
            title: 'Встреча 2',
            dateStart: new Date(fiveHoursLater.getTime() + HOUR),
            dateEnd: new Date(fiveHoursLater.getTime() + HOUR + HOUR),
        },
        // вторая переговорка
        {
            title: 'ШРИ 2018 - начало 2',
            dateStart: now,
            dateEnd: new Date(now.getTime() + HALFHOUR + QUARTER),
        },
        {
            title: '👾 Хакатон 2👾',
            dateStart: new Date(now.getTime() + THREEQUARTERS),
            dateEnd: new Date(oneHourLater.getTime() + HOUR),
        },
        {
            title: '🍨 Пробуем kefir.js 2',
            dateStart: new Date(oneHourLater.getTime() + HOUR),
            dateEnd: threeHoursLater,
        },
        {
            title: 'Встреча 3',
            dateStart: new Date(threeHoursLater.getTime() + HALFHOUR),
            dateEnd: new Date(fourHoursLater.getTime() + HOUR),
        },
        {
            title: 'Встреча 4',
            dateStart: new Date(fiveHoursLater.getTime() + HOUR + HOUR),
            dateEnd: new Date(fiveHoursLater.getTime() + HOUR + HOUR + QUARTER),
        },
        // третья переговорка
        {
            title: 'ШРИ 2018 - начало 3',
            dateStart: new Date(now.getTime() + QUARTER),
            dateEnd: new Date(now.getTime() + HALFHOUR + QUARTER),
        },
        {
            title: '👾 Хакатон 3👾',
            dateStart: new Date(now.getTime() + THREEQUARTERS),
            dateEnd: new Date(oneHourLater.getTime() + HOUR),
        },
        {
            title: '🍨 Пробуем kefir.js 3',
            dateStart: new Date(oneHourLater.getTime() + HOUR),
            dateEnd: threeHoursLater,
        },
        {
            title: 'Встреча 5',
            dateStart: new Date(threeHoursLater.getTime() + HALFHOUR),
            dateEnd: new Date(fourHoursLater.getTime() + HOUR),
        },
        {
            title: 'Встреча 6',
            dateStart: new Date(fiveHoursLater.getTime() + HOUR + HOUR),
            dateEnd: new Date(fiveHoursLater.getTime() + HOUR + HOUR + QUARTER),
        },
        // четвертая переговорка
        {
            title: 'ШРИ 2018 - начало 4',
            dateStart: new Date(now.getTime() + HOUR),
            dateEnd: new Date(now.getTime() + HALFHOUR + QUARTER),
        },
        {
            title: '👾 Хакатон 4👾',
            dateStart: new Date(now.getTime() + HOUR + HOUR + HOUR),
            dateEnd: new Date(oneHourLater.getTime() + HOUR + HOUR + HOUR + QUARTER),
        },
        {
            title: '🍨 Пробуем kefir.js 4',
            dateStart: new Date(threeHoursLater.getTime() + HOUR + QUARTER),
            dateEnd: fiveHoursLater,
        },
        {
            title: 'Встреча 7',
            dateStart: new Date(fiveHoursLater.getTime() + HALFHOUR),
            dateEnd: new Date(fiveHoursLater.getTime() + HOUR),
        },
        {
            title: 'Встреча 8',
            dateStart: new Date(fiveHoursLater.getTime() + HOUR + QUARTER),
            dateEnd: new Date(fiveHoursLater.getTime() + HOUR + HOUR + QUARTER),
        },
        {
            title: 'Встреча 9',
            dateStart: new Date(fiveHoursLater.getTime() + HOUR + HOUR + QUARTER),
            dateEnd: new Date(fiveHoursLater.getTime() + HOUR + HOUR + HALFHOUR + QUARTER),
        },
        // пятая переговорка
        {
            title: 'ШРИ 2018 - начало 5',
            dateStart: new Date(now.getTime() + HOUR),
            dateEnd: new Date(now.getTime() + HALFHOUR + QUARTER),
        },
        {
            title: '👾 Хакатон 4👾',
            dateStart: new Date(now.getTime() + HOUR + HOUR + HOUR),
            dateEnd: new Date(oneHourLater.getTime() + HOUR + HOUR + HOUR + QUARTER),
        },
        {
            title: '🍨 Пробуем kefir.js 4',
            dateStart: new Date(threeHoursLater.getTime() + HOUR + QUARTER),
            dateEnd: fiveHoursLater,
        },
        {
            title: 'Встреча 10',
            dateStart: new Date(fiveHoursLater.getTime() + HALFHOUR),
            dateEnd: new Date(fiveHoursLater.getTime() + HOUR),
        },
        {
            title: 'Встреча 11',
            dateStart: new Date(fiveHoursLater.getTime() + HOUR + QUARTER),
            dateEnd: new Date(fiveHoursLater.getTime() + HOUR + HOUR + QUARTER),
        },
        {
            title: 'Встреча 12',
            dateStart: tomorrow,
            dateEnd: tomorrowOneHourLater,
        },
        {
            title: 'Встреча 13',
            dateStart: tomorrowOneHourLater,
            dateEnd: tomorrowTwoHoursLater,
        },
        {
            title: 'Встреча 14',
            dateStart: tomorrowTwoHoursLater,
            dateEnd: tomorrowThreeHoursLater,
        },
        // шестая переговорка
        {
            title: 'ШРИ 2018 - начало 6',
            dateStart: new Date(now.getTime() + HOUR + HALFHOUR),
            dateEnd: new Date(now.getTime() + HALFHOUR + QUARTER + HOUR),
        },
        {
            title: '👾 Хакатон 5👾',
            dateStart: new Date(now.getTime() + HOUR + HOUR + HALFHOUR),
            dateEnd: new Date(oneHourLater.getTime() + HOUR + HOUR + HOUR),
        },
        {
            title: '🍨 Пробуем kefir.js 5',
            dateStart: new Date(threeHoursLater.getTime() + HOUR + QUARTER),
            dateEnd: fiveHoursLater,
        },
        {
            title: 'Встреча 15',
            dateStart: new Date(fiveHoursLater.getTime() + HALFHOUR),
            dateEnd: new Date(fiveHoursLater.getTime() + HOUR),
        },
        {
            title: 'Встреча 16',
            dateStart: new Date(fiveHoursLater.getTime() + HOUR + QUARTER),
            dateEnd: new Date(fiveHoursLater.getTime() + HOUR + HOUR + QUARTER),
        },
        {
            title: 'Встреча 17',
            dateStart: tomorrow,
            dateEnd: new Date(tomorrowOneHourLater.getTime() + HOUR + QUARTER),
        },
        {
            title: 'Встреча 18',
            dateStart: new Date(tomorrowOneHourLater.getTime() + HOUR + HALFHOUR),
            dateEnd: new Date(tomorrowTwoHoursLater.getTime() + HOUR + HOUR),
        },
        {
            title: 'Встреча 19',
            dateStart: new Date(tomorrowOneHourLater.getTime() + HOUR + HALFHOUR + HOUR),
            dateEnd: new Date(tomorrowTwoHoursLater.getTime() + HOUR + HOUR + HOUR + HOUR),
        },
    ]);

    Promise.all([usersPromise, roomsPromise, eventsPromise])
        .then(() => Promise.all([
            models.User.findAll(),
            models.Room.findAll(),
            models.Event.findAll(),
        ])).then(([users, rooms, events]) => {
            const promises = [];
            // первая переговорка
            promises.push(events[0].setRoom(rooms[0]));
            promises.push(events[1].setRoom(rooms[0]));
            promises.push(events[2].setRoom(rooms[0]));
            promises.push(events[3].setRoom(rooms[0]));
            promises.push(events[4].setRoom(rooms[0]));

            promises.push(events[0].setUsers([users[1], users[2], users[3]]));
            promises.push(events[1].setUsers([users[0], users[1]]));
            promises.push(events[2].setUsers([users[0], users[2], users[5]]));
            promises.push(events[3].setUsers([users[1], users[2], users[4], users[5]]));
            promises.push(events[4].setUsers([users[2], users[3]]));

            // вторая переговорка
            promises.push(events[5].setRoom(rooms[1]));
            promises.push(events[6].setRoom(rooms[1]));
            promises.push(events[7].setRoom(rooms[1]));
            promises.push(events[8].setRoom(rooms[1]));
            promises.push(events[9].setRoom(rooms[1]));

            promises.push(events[5].setUsers([users[0], users[1], users[5]]));
            promises.push(events[6].setUsers([users[0], users[2]]));
            promises.push(events[7].setUsers([users[0], users[3], users[5]]));
            promises.push(events[8].setUsers([users[1], users[0], users[3], users[5]]));
            promises.push(events[9].setUsers([users[2], users[3], users[4]]));

            // третья переговорка
            promises.push(events[10].setRoom(rooms[2]));
            promises.push(events[11].setRoom(rooms[2]));
            promises.push(events[12].setRoom(rooms[2]));
            promises.push(events[13].setRoom(rooms[2]));
            promises.push(events[14].setRoom(rooms[2]));

            promises.push(events[10].setUsers([users[0], users[2], users[5]]));
            promises.push(events[11].setUsers([users[4], users[1]]));
            promises.push(events[12].setUsers([users[0], users[2], users[5]]));
            promises.push(events[13].setUsers([users[1], users[2], users[0], users[5]]));
            promises.push(events[14].setUsers([users[1], users[3]]));

            // четвертая переговорка
            promises.push(events[15].setRoom(rooms[3]));
            promises.push(events[16].setRoom(rooms[3]));
            promises.push(events[17].setRoom(rooms[3]));
            promises.push(events[18].setRoom(rooms[3]));
            promises.push(events[19].setRoom(rooms[3]));
            promises.push(events[20].setRoom(rooms[3]));

            promises.push(events[15].setUsers([users[1], users[2], users[3]]));
            promises.push(events[16].setUsers([users[0], users[1]]));
            promises.push(events[17].setUsers([users[0], users[2], users[5]]));
            promises.push(events[18].setUsers([users[1], users[2], users[4], users[5]]));
            promises.push(events[19].setUsers([users[2], users[3]]));
            promises.push(events[20].setUsers([users[2], users[3]]));

            // пятая переговорка
            promises.push(events[21].setRoom(rooms[4]));
            promises.push(events[22].setRoom(rooms[4]));
            promises.push(events[23].setRoom(rooms[4]));
            promises.push(events[24].setRoom(rooms[4]));
            promises.push(events[25].setRoom(rooms[4]));
            promises.push(events[26].setRoom(rooms[4]));
            promises.push(events[27].setRoom(rooms[4]));
            promises.push(events[28].setRoom(rooms[4]));

            promises.push(events[21].setUsers([users[0], users[1]]));
            promises.push(events[22].setUsers([users[1], users[2]]));
            promises.push(events[23].setUsers([users[0], users[2]]));
            promises.push(events[24].setUsers([users[1], users[2], users[3], users[4]]));
            promises.push(events[25].setUsers([users[1], users[2]]));
            promises.push(events[26].setUsers([users[0], users[2]]));
            promises.push(events[27].setUsers([users[0], users[2], users[5], users[3]]));
            promises.push(events[28].setUsers([users[0], users[2], users[5], users[3]]));

            // шестая переговорка
            promises.push(events[29].setRoom(rooms[5]));
            promises.push(events[30].setRoom(rooms[5]));
            promises.push(events[31].setRoom(rooms[5]));
            promises.push(events[32].setRoom(rooms[5]));
            promises.push(events[33].setRoom(rooms[5]));
            promises.push(events[34].setRoom(rooms[5]));
            promises.push(events[35].setRoom(rooms[5]));
            promises.push(events[36].setRoom(rooms[5]));

            promises.push(events[29].setUsers([users[1], users[2], users[5]]));
            promises.push(events[30].setUsers([users[1], users[2]]));
            promises.push(events[31].setUsers([users[0], users[2]]));
            promises.push(events[32].setUsers([users[1], users[2], users[3], users[4]]));
            promises.push(events[33].setUsers([users[1], users[2]]));
            promises.push(events[34].setUsers([users[0], users[2]]));
            promises.push(events[35].setUsers([users[0], users[2], users[5], users[3]]));
            promises.push(events[36].setUsers([users[0], users[2], users[5], users[3]]));

            return Promise.all(promises);
        });
}

sequelize.sync().then(createData);
