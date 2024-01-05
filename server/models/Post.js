const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const reactionSchema = require('./Reaction');


function dateFormat(timestamp) {
    const date = new Date(timestamp);

    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const amOrPm = date.getHours() >= 12 ? 'p.m.' : 'a.m.';

    return `${hours}:${minutes}${amOrPm} ${month}/${day}/${year}`;
}

const postSchema = new Schema(
    {
        PostId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        postText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        postPic: {
            type: String,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        postAuthor: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        reactions: [reactionSchema],
        comments: [commentSchema],
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

const Post = model('Post', postSchema);
module.exports = Post;