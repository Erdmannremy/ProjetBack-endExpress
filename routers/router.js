const authRouter = require('./auth.router');
const articleRouter = require('./article.router');
const detailRouter = require('./detail.router');
// const userRouter  = require ('./user.router');

const router = require('express').Router();

router.use('/auth', authRouter);
router.use('/articles',articleRouter);
router.use('/details',detailRouter); 
// router.use('/users',userRouter)

module.exports = router;