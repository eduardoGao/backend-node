const express = require('express')

const dataMovies = require('../utils/mockData/dataMovies')


function apiMovies(app) {
  const router = express.Router()
  
  app.use('/api/movies', router)

  router.get('/', async (req, res, next) => {
    try {
      const movies = await Promise.resolve(dataMovies)

      res.status(200).json({
        movies,
        message: 'Movies listed'
      })
    } catch (error) {
      next(error)
    }
  })
}

module.exports = apiMovies