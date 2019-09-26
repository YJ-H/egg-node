const Controller = require('egg').Controller;
const Tips = require('../../utils/tip')
class ArticleController extends Controller {
  async findArticleById() {
    let { ctx } = this;
    if (!ctx.params.id) ctx.body = Tips['PARAMETER_ERROR'];
    ctx.body = await ctx.service.article.findArticleById({id: ctx.params.id})
  }

  async findArticleList() {
    let { ctx } = this;
    ctx.body = await ctx.service.article.findArticleList()
  }

  async addArticle() {
    let { ctx } = this;
    const createRule = {
      title: { type: 'string' },
      html: { type: 'string' },
      markdown: {type: 'string'}
    };
    // 校验参数
    try {
      ctx.validate(createRule);
      ctx.body = await ctx.service.article.addArticle(ctx.request.body)
    } catch (error) {
      ctx.body = Tips['PARAMETER_ERROR']
    }
  }
}

module.exports = ArticleController;
