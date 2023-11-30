
const express = require('express');
const router = express.Router();

// Importez le contrôleur d'article
const ArticleController = require('../controllers/article.controller');

// Définissez les routes
router.get('/', ArticleController.getArticles);
router.post('/', ArticleController.createArticle);
router.put('/:id', ArticleController.updateArticle);
router.delete('/:id', ArticleController.deleteArticle);

// Exportez le routeur
module.exports = router;
