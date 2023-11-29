const express = require('express');
const app = express();

// Importez le modèle d'article
const Article = require('./models/article');

// Créez un nouveau contrôleur
const ArticleController = {

  // Méthode pour récupérer la liste des articles
  getArticles(req, res) {
    // Récupérez la liste des articles depuis la base de données
    const articles = Article.find();

    // Envoyez la liste des articles au client
    res.send(articles);
  },

  // Méthode pour créer un nouvel article
  createArticle(req, res) {
    // Obtenez les données de l'article du client
    const body = req.body;

    // Créez un nouvel objet article
    const article = new Article({
      title: body.title,
      content: body.content
    });

    // Enregistrez l'article dans la base de données
    article.save();

    // Envoyez une réponse au client
    res.sendStatus(201);
  },

  // Méthode pour mettre à jour un article existant
  updateArticle(req, res) {
    // Obtenez les données de l'article du client
    const body = req.body;

    // Obtenez l'article à partir de la base de données
    const article = Article.findById(body.id);

    // Mettez à jour les données de l'article
    article.title = body.title;
    article.content = body.content;

    // Enregistrez les modifications dans la base de données
    article.save();

    // Envoyez une réponse au client
    res.sendStatus(200);
  },

  // Méthode pour supprimer un article existant
  deleteArticle(req, res) {
    // Obtenez l'article à partir de la base de données
    const article = Article.findById(req.params.id);

    // Supprimez l'article de la base de données
    article.remove();

    // Envoyez une réponse au client
    res.sendStatus(204);
  }
}






















