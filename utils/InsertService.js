const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const {performance} = require('perf_hooks')

const db = require('../db/DBService')
const Config = require('../config.json')

const InsertService = {

    insert: async (insert_fn) => {
        const results = {}
        const files = await promisify(fs.readdir)(path.join(__dirname, "../data"))

        const [client, done] = await db.connect()

        try {

            // Warm-up
            await client.query(`SELECT * FROM users`)

            for (file_index in files) {
                const file = files[file_index]
                timings = []
                const file_data = fs.readFileSync(path.join(__dirname, "../data", file), 'utf8')
                const data = JSON.parse(file_data)
                console.log(data)
                
                for (var it = 0; it < Config.NB_ITERATION; it++) {
                    // Remove previous rows
                    await client.query(`DELETE FROM users`)

                    var tmp = performance.now()
                    await insert_fn(client, data)
                    timings.push(performance.now() - tmp)
                }

                timings.sort()

                const average = timings.reduce((a, b) => a + b, 0) / timings.length
                const median = InsertService.getMedian(timings)
                results[file] = {
                    min: Math.min(...timings) + " ms",
                    max: Math.max(...timings) + " ms",
                    avg: average + " ms",
                    med: median + " ms",
                    speed: (1000 * data.length / median) + " row/sec" 
                }
            }

            return results
        }
        catch (err) { throw err }
        finally { done() }
    },

    getMedian: (arr) => {
        const index = (arr.length % 2 === 0) ? (arr.length / 2) : (((arr.length + 1) / 2) - 1)
        return arr[index]
    }
}

module.exports = InsertService