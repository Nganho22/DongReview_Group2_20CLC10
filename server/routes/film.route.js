const express = require('express');
const router = express.Router();

const filmController = require('../controllers/film.controller');
const { signAccessToken, verifyAccessToken } = require('../helpers/jwtService')

//path /film/ đã được định nghĩa ở bên index.js nên ta chỉ cần '/'

router.post('/store', filmController.store);
router.get('/found-films/:title', filmController.findFilmWithName)
router.get('/top-films', filmController.findTopFilms)
router.get('/all', filmController.all)
router.get('/:id', filmController.show);
router.put('/:id', filmController.update);
router.delete('/:id', filmController.deleteFilm)


module.exports = router;
