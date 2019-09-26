'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const ArticleSchema = new Schema({
    title : { type: String, required: true },     
    html : { type: String, required: true },     
    markdown: {type: String || Number, required: true},
    create_user_id: {type: Number, required: true},
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    }
  },
  {
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    }               
  });
  return mongoose.model('article', ArticleSchema);
};