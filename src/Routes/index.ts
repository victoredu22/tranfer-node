import { Router } from "express";
import UserController from "../Controllers/User.controller";
import validateUser from "../validators/User.validator";
import validateBank from "../validators/Bank.validator";
import { body, param, query, validationResult } from "express-validator";
import { validate } from "../middleware/rejectInvalid";

import BankController from "../Controllers/Bank.controller";
import TranferController from "../Controllers/Tranfer.controller";

const router = Router();

router.post(
  "/user",
  validate(validateUser.validateCreate),
  UserController.CreateUser
);

router.post(
  "/bank",
  validate(validateBank.validateCreate),
  BankController.Create
);
router.get("/bank", BankController.Index);

router.post("/tranfer", TranferController.createTranfer);
export default router;
