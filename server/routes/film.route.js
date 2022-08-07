const express = require('express');
const router = express.Router();

const filmController = require('../controllers/film.controller');
const { signAccessToken, verifyAccessToken } = require('../helpers/jwtService')

//path /film/ đã được định nghĩa ở bên index.js nên ta chỉ cần '/'

router.post('/store', filmController.store);
router.get('/found-films/:title', filmController.findFilmWithName)
router.get('/:id/update', verifyAccessToken, filmController.update);
router.get('/:id/updatescore', filmController.updatescore)
router.put('/:id', verifyAccessToken, filmController.submit)
router.get('/:slug', filmController.show);
router.delete('/:id', filmController.deleteFilm)

module.exports = router;
