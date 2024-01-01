const { Schema, model } = require('mongoose');

const setSchema = new Schema(
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
        parts: {
            type: Schema.Types.ObjectId,
        },
        categoryId: {
            allowNull: false,
            type: Schema.Types.ObjectId,
            references: {
                model: 'Category',
                key: 'categoryId',
            },
        },
        userId: {
            allowNull: false,
            type: Schema.Types.ObjectId,
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

const Set = model('Set', setSchema);
module.exports = Set;