const mongoose = require('mongoose');
const ArticleSchema = mongoose.Schema({
  title: String,
  content: String
});
const ArticleModel = mongoose.model('Article', ArticleSchema);

module.exports = {
  find(): Promise<Article[]> {
    return ArticleModel.find({});
  },
  create(article: DTO): Promise<Article> {
    const newArticle = new ArticleModel({
      title: article.title,
      content: article.content
    });
    return newArticle.save();
  },
  update(article: DTO): Promise<Article> {
    const existingArticle = ArticleModel.findById(article.id);
    return existingArticle.then((article) => {
      article.title = article.title;
      article.content = article.content;
      return article.save();
    });
  },
  delete(id: string): Promise<void> {
    return ArticleModel.findByIdAndRemove(id);
  }
};
const authDTO  = require('../dto/auth.dto');
const db = require('../models');
const jwt = require('jsonwebtoken');

const authService = {

    exist: async (login) => {
        const auth = await db.Auth.findOne({
            where: { login }
        });

        return new authDTO(auth);
    },

    insert: async (data) => {
        const auth = await db.Auth.create(data)
        return new authDTO(auth)
    },

    addJwt: async (jwt, id) => {
        // Vérification de l'existence de l'utilisateur
        const userFound = await db.Auth.findOne({
            where: { id }
        });
        // S'il existe, on lui donne un jwt (s'il n'en a pas encore)
        await userFound.update({ jwt })

        return userFound;
    },

    getJwt: async (id) => {
        const jwtExist = await db.Auth.findOne({
            where: { id }
        });

        return jwtExist;
    },

    verifyJwt: async (token) => {
        const secret = process.env.JWT_SECRET;

        try {
            const decoded = jwt.verify(token, secret);
            return true
        } catch (err) {
            return false
        }
    }
};

module.exports = authService;