const Controller = require('egg').Controller;

class UserController extends Controller {
  async findAll() {
    this.ctx.body = await this.ctx.service.user.findAll();
  }
}

module.exports = UserController;
