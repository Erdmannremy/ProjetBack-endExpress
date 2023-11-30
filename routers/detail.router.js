
const express = require('express');
const router = express.Router();

// Importez le contrôleur d'article
const ArticleController = require('../controllers/article.controller');

// Définissez les routes
router.get('/getAll', ArticleController.getArticles);
router.post('/create', ArticleController.createArticle);
router.put('/update/:id', ArticleController.updateArticle);
router.delete('/delete//:id', ArticleController.deleteArticle);

// Exportez le routeur
module.exports = router;
