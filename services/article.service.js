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
