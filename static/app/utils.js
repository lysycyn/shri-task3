module.exports = {
    plural(quant, forms) {
        return forms[
            (quant % 10 === 1 && quant % 100 !== 11)
                ? 0
                : (quant % 10 >= 2 && quant % 10 <= 4 && (quant % 100 < 10 || quant % 100 >= 20))
                    ? 1
                    : 2
        ];
    },

    getDateClosenessText(date) {
        const today = new Date();
        const yesterday = new Date();
        const tommorow = new Date();

        yesterday.setDate(today.getDate() - 1);
        tommorow.setDate(today.getDate() + 1);

        const dateString = date.toDateString();
        const todayString = today.toDateString();
        const yesterdayString = yesterday.toDateString();
        const tommorowString = tommorow.toDateString();

        switch (dateString) {
        case todayString:
            return 'Сегодня';

        case yesterdayString:
            return 'Вчера';

        case tommorowString:
            return 'Завтра';

        default:
            return undefined;
        }
    },

    getWeekDayText(date, short) {
        const weekdays = [
            {
                full: 'воскресенье',
                short: 'вск',
            },
            {
                full: 'понедельник',
                short: 'пнд',
            },
            {
                full: 'вторник',
                short: 'втр',
            },
            {
                full: 'среда',
                short: 'срд',
            },
            {
                full: 'четверг',
                short: 'чтв',
            },
            {
                full: 'пятница',
                short: 'птн',
            },
            {
                full: 'суббота',
                short: 'сбт',
            },
        ];

        if (short) {
            return `${weekdays[date.getUTCDay()].short}`;
        }

        return `${weekdays[date.getUTCDay()].full}`;
    },

    getTimeText(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();

        hours = hours < 10 ? `0${hours}` : `${hours}`;
        minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

        return `${hours}:${minutes}`;
    },

    getDateText(date, isShort, isYear) {
        const months = [
            {
                full: 'января',
                short: 'янв',
            },
            {
                full: 'февраля',
                short: 'фев',
            },
            {
                full: 'марта',
                short: 'мар',
            },
            {
                full: 'апреля',
                short: 'апр',
            },
            {
                full: 'мая',
                short: 'мая',
            },
            {
                full: 'июня',
                short: 'июн',
            },
            {
                full: 'июля',
                short: 'июл',
            },
            {
                full: 'августа',
                short: 'авг',
            },
            {
                full: 'сентября',
                short: 'сен',
            },
            {
                full: 'октября',
                short: 'окт',
            },
            {
                full: 'ноября',
                short: 'ноя',
            },
            {
                full: 'декабря',
                short: 'дек',
            },
        ];

        const month = date.getUTCMonth();
        const day = date.getUTCDate();
        const year = date.getFullYear();

        if (isShort) {
            return `${day} ${months[month].short}`;
        }

        if (isYear) {
            return `${day} ${months[month].full}, ${year}`;
        }

        return `${day} ${months[month].full}`;
    },
};
