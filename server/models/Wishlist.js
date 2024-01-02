const { Schema, model } = require('mongoose');

const wishlistSchema = new Schema(
  {
    setId: {
      type: Schema.Types.ObjectId,
      required: true,
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
      ref: 'User',
      required: true
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