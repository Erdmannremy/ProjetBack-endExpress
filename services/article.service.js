

const db = require('../models');
const Article = db.Article;

const articleService = {

  // Retourne la liste de tous les articles
  getArticles: async () => {
    const articles = await Article.findAll();
    return articles;
  },

  // Crée un nouvel article
  createArticle: async (articleData) => {
    const article = new Article({
      title: articleData.title,
      content: articleData.content,
      authorId: articleData.authorId,
    });
    await article.save();
    return article;
  },

  // Met à jour un article existant
  updateArticle: async (id, articleData) => {
    const article = await Article.findOne({
      id: id,
    });
    article.title = articleData.title;
    article.content = articleData.content;
    article.authorId = articleData.authorId;
    await article.save();
    return article;
  },

  // Supprime un article existant
  deleteArticle: async (id) => {
    const deletedRows = await Article.destroy({
      id: id,
    });
    return deletedRows === 1;
  },
};

module.exports = articleService;
