'use strict';

const Service = require('egg').Service;
const Tips = require('../../utils/tip')
class ArticleService extends Service {

  async findArticleById ({ id }) {
    const { ctx } = this;
    const result = await ctx.model.Article.findById(id).populate('user')
    return result ? result : Tips['NO_DATA']
  }

  async findArticleList () {
    const { ctx } = this;
    const result = await ctx.model.Article.find().populate('user')
    return result ? result : Tips['NO_DATA']
  }

  async addArticle (article) {
    const { ctx } = this;
    let isSave = await new ctx.model.Article({
      ...article,
      create_user_id: 4, // 后期删除
      user: '5d6f7fe2f97ee645bf0efc72'
    }).save()
    console.log(isSave.errors)
    return isSave.errors ? Tips['ERROR'] : Tips['OK']
  }
}
module.exports = ArticleService;