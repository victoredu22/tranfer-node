import User, { IUser } from "../Models/User.model";

export type ICreateUserInput = {
  rut: IUser["rut"];
  name: IUser["name"];
  email: IUser["email"];
  phone: IUser["phone"];
  bank: IUser["bank"];
  typeAccount: IUser["typeAccount"];
  numberAccount: IUser["numberAccount"];
};
