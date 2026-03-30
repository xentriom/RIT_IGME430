const mongoose = require("mongoose");

let RelationshipModel = {};

const RelationshipSchema = new mongoose.Schema({
  follower: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "Account",
    index: true,
  },
  following: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "Account",
    index: true,
  },
});

RelationshipSchema.index({ follower: 1, following: 1 }, { unique: true });

RelationshipSchema.statics.toAPI = (doc) => ({
  _id: doc._id,
  follower: doc.follower,
  following: doc.following,
});

RelationshipSchema.statics.follow = async (followerId, followingId) => {
  if (!followerId || !followingId) return null;
  if (String(followerId) === String(followingId)) return null;

  const rel = new RelationshipModel({ follower: followerId, following: followingId });
  return rel.save();
};

RelationshipSchema.statics.unfollow = (followerId, followingId) =>
  RelationshipModel.deleteOne({ follower: followerId, following: followingId }).exec();

RelationshipSchema.statics.isFollowing = async (followerId, followingId) => {
  const doc = await RelationshipModel.findOne({ follower: followerId, following: followingId })
    .select("_id")
    .lean()
    .exec();
  return !!doc;
};

RelationshipSchema.statics.findFollowingIds = (followerId) =>
  RelationshipModel.find({ follower: followerId })
    .select("following")
    .lean()
    .exec()
    .then((docs) => docs.map((d) => d.following));

RelationshipSchema.statics.countFollowers = (accountId) =>
  RelationshipModel.countDocuments({ following: accountId }).exec();

RelationshipSchema.statics.countFollowing = (accountId) =>
  RelationshipModel.countDocuments({ follower: accountId }).exec();

RelationshipModel = mongoose.model("Relationship", RelationshipSchema);
module.exports = RelationshipModel;
