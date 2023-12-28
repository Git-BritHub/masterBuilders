const { Schema, model } = require('mongoose');

const collectionSchema = new Schema(
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

const Collection = model('Collection', collectionSchema);
module.exports = Collection;