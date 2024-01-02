const { Schema, model } = require('mongoose');
const setsSchema = require('./Sets');

const categorySchema = new Schema(
    {
        categoryId: {
            type: Schema.Types.ObjectId,
            required: true,
            primaryKey: true,
        },
        categoryName: {
            type: String,
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
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