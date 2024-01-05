const { Schema, model } = require('mongoose');

const setsSchema = new Schema(
    {
        setId: {
            type: Schema.Types.ObjectId,
            required: true,
          },
        setName: {
            type: String,
            required: true,
        },
        setNum: {
            type: String,
        },
        setImgUrl: {
            type: String,
        },
        parts: {
            type: Schema.Types.ObjectId,
        },
        themeId: {
            type: Schema.Types.ObjectId,
            ref: 'Theme',
            required: true
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

const Sets = model('Sets', setsSchema);
module.exports = Sets;