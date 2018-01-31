module.exports = {
    events: `{
        events {
            id
            title
            dateStart
            dateEnd
            users {
                id
                login
            }
            room {
                id
                floor
            }
        }
    }`,
    rooms: `{
        rooms {
            id
            title
            capacity
            floor
        }
    }`
}
