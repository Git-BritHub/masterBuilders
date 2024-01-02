const { Schema, model } = require('mongoose');

const setsSchema = new Schema(
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
            ref: 'User',
            allowNull: true
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

const Sets = model('Sets', setsSchema);
module.exports = Sets;