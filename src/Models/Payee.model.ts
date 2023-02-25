import mongoose, { Schema, Document } from "mongoose";
export interface IPayee extends Document {
  rut: String;
  name: String;
  email: String;
  phone: Number;
  bank: String;
  typeAccount: String;
  numberAccount: Number;
}
const PayeeSchema: Schema = new Schema(
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
      type: Number,
      required: true,
    },
    typeAccount: {
      type: Number,
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
export default mongoose.model<IPayee>("Payee", PayeeSchema);
