import { body, param, query } from "express-validator";

const validateCreate = [
  body("code")
    .isNumeric()
    .withMessage("code must be a number")
    .exists()
    .withMessage("rut must be a provided"),
  body("name")
    .isString()
    .withMessage("name must be a string")
    .exists()
    .withMessage("rut must be a provided"),
];

export default {
  validateCreate,
};
