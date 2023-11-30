
const db = require('../models');
const Article = db.Article;

const articleController = {

  // Retourne la liste de tous les articles
  getArticles: async (req, res) => {
    const articles = await Article.findAll();
    res.json(articles);
  },

  // Crée un nouvel article
  createArticle: async (req, res) => {
    const article = new Article({
      title: req.body.title,
      content: req.body.content,
      authorId: req.body.authorId,
    });
    await article.save();
    res.json(article);
  },

  // Met à jour un article existant
  updateArticle: async (req, res) => {
    const article = await Article.findOne({
      id: req.params.id,
    });
    article.title = req.body.title;
    article.content = req.body.content;
    article.authorId = req.body.authorId;
    await article.save();
    res.json(article);
  },

  // Supprime un article existant
  deleteArticle: async (req, res) => {
    const deletedRows = await Article.destroy({
      id: req.params.id,
    });
    res.json({ deletedRows });
  },
};

module.exports = articleController;
