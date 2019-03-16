var DBService = function() {
    const pg = require('pg')
    const path = require('path')
    const fs = require('fs')
    const { promisify } = require('util')
    const Config = require('../config.json')

    this.pool = new pg.Pool(Config.dbConfig)

    pg.types.setTypeParser(1114, (stringValue) => {
        return Math.floor(Date.parse(stringValue) / 1000)
    })

    pg.types.setTypeParser(1184, (stringValue) => {
        return Math.floor(Date.parse(stringValue) / 1000)
    })

    this.initDB = async () => {
        const [client, done] = await this.connect()
        try {
            // Init DB from Tables.sql
            var sqlPath = path.join(__dirname, 'Tables.sql')
            const initQuery = await promisify(fs.readFile)(sqlPath, 'utf8')
            await client.query(initQuery)
        }
        catch (err) { throw err } 
        finally { done() }
    }

    this.connect = async () => {
        var client = await this.pool.connect()
        return [client, client.release]
    }

    this.beginTransaction = async () => {
        const [client, done] = await this.connect()

        try {
            await client.query('BEGIN')

            const custom_done = async (err) => {
                if (!err) { await client.query('COMMIT') } 
                else { await client.query('ROLLBACK') }
                done()
            }

            return [client, custom_done]

        } catch (err) {
            done()
        }
    }

}

DBService.getInstance = () => {
    if (this.instance === undefined) {
        this.instance = new DBService()
    }
    return this.instance
}

module.exports = DBService.getInstance()
