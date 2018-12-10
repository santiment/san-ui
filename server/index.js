var express = require('express')
var app = express()

app.use(express.static('build'))

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}!`)
})
