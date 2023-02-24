import { RequestHandler } from "express";
import BankModel from "../Models/Bank.model";
import { ICreateBank } from "../Types/bank";
import { ErrorString } from "../Types/errors";

const Create: RequestHandler = async (req, res) => {
  try {
    const data: ICreateBank = req.body;
    const bank = await BankModel.create(data);

    return res.status(201).json(bank);
  } catch (e) {
    const error = e as ErrorString;
    return res.status(500).json({ status: error });
  }
};

const Index: RequestHandler = async (req, res) => {
  try {
    const bank = await BankModel.find();
    return res.status(201).json(bank);
  } catch (e) {
    const error = e as ErrorString;
    return res.status(500).json({ status: error });
  }
};

export default { Create, Index };
