import mongoose, { Schema, Document } from "mongoose";
export interface ITranfer extends Document {
  rut: String;
  amount: Number;
}

const TranferSchema: Schema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      default: null,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

export default mongoose.model<ITranfer>("Tranfer", TranferSchema);
