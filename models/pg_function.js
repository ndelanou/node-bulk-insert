const pg_function = {
    insert: async (client, data) => {
        await client.query(`
            INSERT INTO users
                SELECT * FROM json_to_recordset($1::json) AS ("id" int, "isActive" bool, "userType" int, "firstName" text, "lastName" text, "username" text, "email" text, "dateRegistered" timestamp, "dateBirth" timestamp)
        `, [JSON.stringify(data)])
    }
}

module.exports = pg_function.insert