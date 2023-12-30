const { Schema, model } = require('mongoose');

const wishlistSchema = new Schema(
  {
    setId: {
      type: Schema.Types.ObjectId,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    setName: {
      type: String,
    },
    setNum: {
        type: String,
    },
    setImgUrl: {
        type: String,
    },
    userId: {
      type: Schema.Types.ObjectId,
      references: {
        ref: 'User',
      },
    },
  },
  {
    toJSON: {
        getters: true,
    },
    id: false,
}
);

const Wishlist = model('Wishlist', wishlistSchema);
module.exports = Wishlist;