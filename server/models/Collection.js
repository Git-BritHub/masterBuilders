const { Schema, model } = require('mongoose');

// fields/columns for collection model
const collectionSchema = new Schema(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    set_num: {
        type: DataTypes.STRING
    },
    set_img_url: {
        type: DataTypes.STRING
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
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