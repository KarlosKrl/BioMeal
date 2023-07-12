const { default: mongoose, Schema, models, model } = require("mongoose");

const CommentsSchema = new Schema({
  name: { type: String },
  email: { type: String },
  movie_id: { type: mongoose.Types.ObjectId, ref: "Movies" },
});

const Comments = models?.Comments || model("Comments", CommentsSchema);

export default Comments;
