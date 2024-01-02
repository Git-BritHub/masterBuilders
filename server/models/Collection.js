const { Schema, model } = require('mongoose');

const collectionSchema = new Schema(
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
      required: true,
    },
  },
  {
    toJSON: {
        getters: true,
    },
    id: false,
}
);

const Collection = model('Collection', collectionSchema);
module.exports = Collection;