import { RequestHandler } from "express";
import TranferModel, { ITranfer } from "../Models/Tranfer.model";
import UserModel from "../Models/User.model";
import { ErrorString } from "../Types/errors";

const createTranfer: RequestHandler = async (req, res, next) => {
  try {
    const data: ITranfer = req.body;
    const user = await UserModel.findOne({
      rut: data.rut,
    });

    const tranfer = await TranferModel.create({
      user: user?.id,
      amount: data.amount,
    });
    return res.status(201).json({ tranfer });
  } catch (e) {
    const error = e as ErrorString;
    return res.status(500).json({ status: error });
  }
};

export default {
  createTranfer,
};
