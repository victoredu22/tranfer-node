import mongoose, { Schema, Document } from "mongoose";
export interface IUser extends Document {
  rut: String;
  name: String;
  email: String;
  phone: Number;
  bank: String;
  typeAccount: String;
  numberAccount: Number;
}
const UserSchema: Schema = new Schema(
  {
    rut: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    bank: {
      type: String,
      required: true,
    },
    typeAccount: {
      type: String,
      required: true,
    },
    numberAccount: {
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
export default mongoose.model<IUser>("User", UserSchema);
