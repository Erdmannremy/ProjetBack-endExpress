const characterRouter = require('./character.router');
const movieRouter = require('./movie.router');



const router = require('express').Router();

router.use('/character', characterRouter);
router.use('/movie', movieRouter);

module.exports = router;