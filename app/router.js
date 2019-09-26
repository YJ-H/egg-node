'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user/findAll', controller.user.findAll);
  router.get('/article/findArticleById/:id', controller.article.findArticleById);
  router.get('/article/findArticleList', controller.article.findArticleList);
  router.put('/article/findArticleList', controller.article.addArticle);
  router.put('/article/addArticle', controller.article.addArticle);
};
