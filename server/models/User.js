const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
	{
		username: {
			type: String,
			unique: true,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "must match an email"]
		},
		password: {
			type: String,
			required: true,
		},
		pic: {
			type: String,
		},
		location: {
			type: String,
		},
		bio: {
			type: String,
		},
		instagram: {
			type: String,
		},
		facebook: {
			type: String,
		},
        tiktok: {
            type: String,
        },
        x: {
            type: String,
        },
        collection: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Collection',
			},
		],
        wishlist: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Wishlist',
			},
		],
        category: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Category',
			},
		],
        sets: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Sets',
			},
		],
		posts: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Post',
			},
		],
		friends: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User',
			},
		],
		friendPosts: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Post',
			},
		],
	},
	{
		toJSON: {
			virtuals: true,
		},
		id: false,
	}
);

// hash user password
userSchema.pre('save', async function (next) {
	if (this.isNew || this.isModified('password')) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

userSchema.virtual("friendCount").get(function () {
	return this.friends.length
})

const User = model('User', userSchema);
module.exports = User;