const parameter = {
    insert: async (client, data) => {
        var params = [
            data.map(d => d.id),
            data.map(d => d.isActive),
            data.map(d => d.userType),
            data.map(d => d.firstName),
            data.map(d => d.lastName),
            data.map(d => d.username),
            data.map(d => d.email),
            data.map(d => d.dateRegistered),
            data.map(d => d.dateBirth),
        ]

        await client.query(`
            INSERT INTO users
                SELECT * FROM UNNEST($1::int[], $2::bool[], $3::int[], $4::text[], $5::text[], $6::text[], $7::text[], $8::timestamp[], $9::timestamp[])
        `, params)
    }
}

module.exports = parameter.insert