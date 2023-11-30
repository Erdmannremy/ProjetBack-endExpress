const articleDTO = require('./controllers/articleDTO.controller');
const ArticleDTO = {
  title: String,
  content: String,
  authorId: mongoose.Types.ObjectId,
};

module.exports = ArticleDTO;
