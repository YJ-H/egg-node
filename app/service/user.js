'use strict';

const Service = require('egg').Service;
class UserService extends Service {
  // 查询所有用户，暂无分页
  async findAll () {
    const { ctx } = this;
    const result = await ctx.model.User.find({})
    console.log(result)
    return result;
  }
  // 更新用户信息
  async add() {
    const {
      ctx,
    } = this;
    const result = await ctx.model.User.create({
      userName: 'huruqing',
    });
    return result;
  }
}
module.exports = UserService;