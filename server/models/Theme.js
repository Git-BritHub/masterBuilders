const { Schema, model } = require('mongoose');
const setsSchema = require('./Sets');

const themeSchema = new Schema(
    {
        themeId: {
            type: Schema.Types.ObjectId,
            required: true,
            unique: true,
        },
        themeName: {
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

const Theme = model('Theme', themeSchema);
module.exports = Theme;