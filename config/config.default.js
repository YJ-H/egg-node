/* eslint valid-jsdoc: "off" */

'use strict';
const mongoConfig = require('./mongodbConfig')

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {

  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1569395422938_301';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 允许请求
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  // 设置安全策略，允许自定义请求头
  config.security= {
    csrf : {
      enable: false,
      // headerName: 'x-csrf-token',// 自定义请求头
    }
  }
  // 添加mongodb连接配置
  config.mongoose = mongoConfig

  return {
    ...config,
    ...userConfig,
  };
};
