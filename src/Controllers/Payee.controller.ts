
import { RequestHandler, response } from "express";
import { ICreateUserInput } from "../Types/user";
import { ErrorString } from "../Types/errors";
import PayeeModel from "../Models/Payee.model";

const Create: RequestHandler = async (req, res, next) => {
  try {
    const data: ICreateUserInput = req.body;
    const payeee = await PayeeModel.create(data);

    return res.status(201).json({ payeee });
  } catch (e) {
    
  }
};
const Index: RequestHandler = async (req, res) => {
  try {
    const user = await PayeeModel.find();
    return res.status(201).json(user);
  } catch (e) {
    const error = e as ErrorString;
    return res.status(500).json({ status: error });
  }
};

const Get: RequestHandler = async (req, res) => {
  try {
     const user = await PayeeModel.findOne({email: req.params.email});
    return res.status(201).json(user);
  } catch (e) {
    const error = e as ErrorString;
    return res.status(500).json({ status: error });
  }
};


export default {
  Create,
  Index,
  Get
};
