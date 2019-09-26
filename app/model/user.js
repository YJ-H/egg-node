'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    name : { type: String, required: true },                    //用户账号
    password: { type: String || Number, required: true }, //密码
    uid: { type: Number, required: true,  unique: true }                
  });
  return mongoose.model('user', UserSchema);
};