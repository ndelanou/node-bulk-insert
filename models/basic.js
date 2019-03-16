const basic = {
    insert: async (client, data) => {
        var preparedString = data.map(d => '(' + [
            d.id,
            d.isActive,
            d.userType,
            "'" + d.firstName + "'",
            "'" + d.lastName + "'",
            "'" + d.username + "'",
            "'" + d.email + "'",
            "'" + d.dateRegistered + "'",
            "'" + d.dateBirth + "'"
        ] + ')').join(',')

        await client.query(`
            INSERT INTO users
            VALUES ${preparedString}
        `, [])
    }
}

module.exports = basic.insert