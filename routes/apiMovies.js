const express = require('express')

const MoviesService = require('../services/movies')

function apiMovies(app) {
  const router = express.Router()
  
  app.use('/api/movies', router)

  const moviesService = new MoviesService()

  router.get('/', async (req, res, next) => {
    try {
      const movies = await moviesService.getMovies()

      res.status(200).json({
        movies,
        message: 'Movies listed'
      })
    } catch (error) {
      next(error)
    }
  })

  router.get('/:movieId', async (req, res, next) => {
    const id = req.query
    try {
      const movie = await moviesService.getMovie(id)

      res.status(200).json({
        Movie: {
          movie
        },
        message: 'Movie'
      })
    } catch (error) {
      next(error)
    }
  })

  router.post('/', async (req, res, next) => {
    //const {body: movie} = req

    try {
      const movie = await moviesService.createMovie()

      res.status(200).json({
        Created: movie,
        message: 'Movie created'
      })
    } catch (error) {
      next(error)
    }
  })

  router.put('/:movieId', async (req, res, next) => {
    try {
      const movie = await moviesService.updateMovie()

      res.status(200).json({
        Update: movie,
        message: 'Movies updated'
      })
    } catch (error) {
      next(error)
    }
  })

  router.delete('/:movieId', async (req, res, next) => {
    const movieId = req.params
    try {
      const movie = await moviesService.deleteMovie({ movieId })

      res.status(200).json({
        deleted: movie,
        message: 'Movie deleted'
      })
    } catch (error) {
      next(error)
    }
  })
}

module.exports = apiMovies