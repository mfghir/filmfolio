import mongoose, { Schema } from "mongoose";

const KDramaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    opinion: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    sort: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId, // reference to the user who created this
      ref: "User", // it will look for a model with that name in lowercase
      required: true,
    },
  },
  { timestamps: true }
);

const DramaModel =
  mongoose.models.DramaModel || mongoose.model("DramaModel", KDramaSchema);

export default DramaModel;
