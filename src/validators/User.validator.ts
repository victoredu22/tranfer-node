import { body, param, query } from "express-validator";

const validateCreate = [
  body("rut")
    .isString()
    .withMessage("rut must be a string")
    .exists()
    .withMessage("rut must be a provided"),
  body("name")
    .isString()
    .withMessage("name must be a string")
    .exists()
    .withMessage("name must be a provided"),
  body("email")
    .isString()
    .withMessage("email must be a string")
    .exists()
    .withMessage("email must be a provided"),
  body("phone")
    .isNumeric()
    .withMessage("phone must be a numeric")
    .exists()
    .withMessage("phone must be a provided"),
  body("bank")
    .isNumeric()
    .withMessage("bank must be a numeric")
    .exists()
    .withMessage("bank must be a provided"),
  body("typeAccount")
    .isNumeric()
    .withMessage("typeAccount must be a numeric")
    .exists()
    .withMessage("typeAccount must be a provided"),
  body("numberAccount")
    .isNumeric()
    .withMessage("typeAccount must be a numeric")
    .exists()
    .withMessage("typeAccount must be a provided"),
];

export default {
  validateCreate,
};
