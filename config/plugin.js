'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };

exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};
// 跨域插件
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
// 参数校验插件
exports.validate = {
  enable: true,
  package: 'egg-validate',
};