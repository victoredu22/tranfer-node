import { RequestHandler } from "express";
import PayeeModel from "../Models/Payee.model";
import TranferModel, { ITranfer } from "../Models/Tranfer.model";
import { ErrorString } from "../Types/errors";

const createTranfer: RequestHandler = async (req, res, next) => {
  try {
    const data: ITranfer = req.body;
    const Payee = await PayeeModel.findOne({
      rut: data.rut,
    });

     const tranfer = await TranferModel.create({
       payee: Payee?._id,
       amount: data.amount,
     });
     return res.status(201).json({ tranfer });
  } catch (e) {
    const error = e as ErrorString;
    return res.status(500).json({ status: error });
  }
};

const Index: RequestHandler = async (req, res) => {
  try {
  
    TranferModel.find({}).populate('payee')
    .exec(function (error, result) {
       return res.json(result)
    });
  } catch (e) {
    const error = e as ErrorString;
    return res.status(500).json({ status: error });
  }
};


export default {
  createTranfer,
  Index
};
