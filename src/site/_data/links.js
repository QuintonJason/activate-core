const Airtable = require('airtable')

require('dotenv').config()

const { AIRTABLE_API_KEY, AIRTABLE_BASE } = process.env

Airtable.configure({
  apiKey: AIRTABLE_API_KEY
})

const base = Airtable.base(AIRTABLE_BASE)

module.exports = () => {
  return new Promise((resolve, reject) => {
    let allRecords = []

    base('Links')
      .select({
        maxRecords: 999
      })
      .eachPage((records, fetchNextPage) => {
        records.forEach(r => {
          allRecords.push({
            keyword: r.get('keyword'),
            url: r.get('url')
          })
        })

        fetchNextPage()
      })
      .then(err => {
        if (err) {
          reject(err)
        } else {
          resolve(allRecords)
        }
      })
  })
}