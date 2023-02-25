import User, { IUser } from "../Models/User.model";
import { RequestHandler, response } from "express";
import { ICreateUserInput } from "../Types/user";
import { ErrorString } from "../Types/errors";
import UserModel from "../Models/User.model";

const CreateUser: RequestHandler = async (req, res, next) => {
  try {
    const data: ICreateUserInput = req.body;
    const user = await User.create(data);

    return res.status(201).json({ user });
  } catch (e) {
    const error = e as ErrorString;
    if (error.code === 11000) {
      return res.status(400).json({ status: "Duplicate user" });
    }
    return res.status(500).json({ status: "UNKNOWN ERROR" });
  }
};
const Index: RequestHandler = async (req, res) => {
  try {
    const user = await UserModel.find();
    return res.status(201).json(user);
  } catch (e) {
    const error = e as ErrorString;
    return res.status(500).json({ status: error });
  }
};


export default {
  CreateUser,
  Index
};
