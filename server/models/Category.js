const { Schema, model } = require('mongoose');
const setsSchema = require('./Sets');

const categorySchema = new Schema(
    {
        categoryId: {
            type: Schema.Types.ObjectId,
            allowNull: false,
            primaryKey: true,
        },
        categoryName: {
            allowNull: false,
            type: DataTypes.STRING
        },
        userId: {
            allowNull: false,
            type: Schema.Types.ObjectId,
            ref: 'User',
            allowNull: true
        },
        sets: [setsSchema],
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

const Category = model('Category', categorySchema);
module.exports = Category;