'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      data: [{id:111,text:222},{id:111,text:222},{id:111,text:222},{id:111,text:222}],
      message: 'ok'
    }
  }
}

module.exports = HomeController;
