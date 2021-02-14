const express = require('express')
const app = express();
const { config } = require('./config/index')
const apiMovies = require('./routes/apiMovies')

apiMovies(app)

app.listen(config.port, () => {
  console.log(`App listening in port http://localhost:${config.port}`)
})