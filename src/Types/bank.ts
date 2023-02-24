import { IBank } from "../Models/Bank.model";

export type ICreateBank = {
  code: IBank["code"];
  name: IBank["name"];
};
