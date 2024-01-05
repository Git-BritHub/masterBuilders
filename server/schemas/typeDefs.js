const typeDefs = `
type User {
    _id: ID!
    username: String!
    email: String
    profilePic: String
    location: String
    bio: String
    instagram: String
    facebook: String
    tiktok: String
    x: String
    collection: [Collection]
    wishlist: [Wishlist]
    theme: [Theme]
    sets: [Sets]
    posts: [Post]
    friendCount: Int
    friends: [User]
    friendPosts: [Post]
}
type Collection {
    _id: ID!
    setName: String
    setNum: String
    setImgURL: String
}
type Wishlist {
    _id: ID!
    setName: String
    setNum: String
    setImgURL: String
}
type Theme {
    _id: ID!
    themeName: String!
    sets: [Set]
}
type Sets {
    _id: ID!
    setId: ID!
    setName: String!
    setNum: String
    setImgUrl: String
    parts: ID
    themeId: ID!
}
input setsInput {
    setId: ID!
    setName: String!
    setNum: String
    setImgUrl: String
    parts: ID
    themeId: ID!
}
type Post {
    _id: ID!
    username: [Post]
    postText: String
    createdAt: String
    postAuthor: String
    comments: [Comment]
    reactions: [Reaction]
}
input Postinput {
    postText: String!
}
type Comment {
    _id: ID!
    commentText: String!
    commentAuthor: String!
    createdAt: String
    reactions: [Reaction]
}
type Reaction {
    _id: ID!
    reactionIcon: String!
    reactionAuthor: String!
    createdAt: String
}
type Auth {
    token: ID!
    user: User
}
type Friend {
    _id: ID!
    username: String
    friendPosts: [Post]
    friendComments: [Comment]
    friendReactions: [Reaction]
}
type Friends {
    friendsId: ID
    username: String
    friendPosts: [Post]
    friendComments: [Comment]
    friendReactions: [Reaction]
}
type FriendUser {
    currentUser: User
    friend: User
}
type Query {
    me: User
    user(username: String!): User
    collection(username: String!): Collection
    wishlist(username: String!): Wishlist
    theme(themeId: ID!): Theme
    sets(setId: ID!): Sets
    posts(username: String): Post
    post(postId: ID!): Post
    users: [User]
    friend( _id: ID!, username: String!): Friend
    friends(friendsId: ID!, username: String): User
    friendPosts: [Post]
}
type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    updateUserInfo(username: String!, bio: String, github: String, linkedIn: String, instagram: String, stackOverflow: String): User
    addFriend(username: String, friendsId: ID): FriendUser
    deleteFriend(friendsId: ID!): FriendUser
    addSet(setsData: setsInput!): User
    deleteSet(setId: ID!): User
    addPost(postText: String!): Post
    savedPost(postText: Postinput): User
    deletePost(_id: ID!): User
    addComment(postId: ID!, commentText: String!): Post
    savedComment(_id: ID!): User
    deleteComment(_id: ID!): User
  }
`;

module.exports = typeDefs