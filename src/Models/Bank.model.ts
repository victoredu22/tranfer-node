import mongoose, { Schema, Document } from "mongoose";
export interface IBank extends Document {
  code: number;
  name: String;
}

const BankSchema: Schema = new Schema(
  {
    code: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
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
export default mongoose.model<IBank>("Bank", BankSchema);
