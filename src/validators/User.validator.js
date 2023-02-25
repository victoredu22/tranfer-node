"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validateCreate = [
    (0, express_validator_1.body)("rut")
        .isString()
        .withMessage("rut must be a string")
        .exists()
        .withMessage("rut must be a provided"),
    (0, express_validator_1.body)("name")
        .isString()
        .withMessage("name must be a string")
        .exists()
        .withMessage("name must be a provided"),
    (0, express_validator_1.body)("email")
        .isString()
        .withMessage("email must be a string")
        .exists()
        .withMessage("email must be a provided"),
    (0, express_validator_1.body)("phone")
        .isNumeric()
        .withMessage("phone must be a numeric")
        .exists()
        .withMessage("phone must be a provided"),
    (0, express_validator_1.body)("bank")
        .isNumeric()
        .withMessage("bank must be a numeric")
        .exists()
        .withMessage("bank must be a provided"),
    (0, express_validator_1.body)("typeAccount")
        .isNumeric()
        .withMessage("typeAccount must be a numeric")
        .exists()
        .withMessage("typeAccount must be a provided"),
    (0, express_validator_1.body)("numberAccount")
        .isNumeric()
        .withMessage("typeAccount must be a numeric")
        .exists()
        .withMessage("typeAccount must be a provided"),
];
exports.default = {
    validateCreate,
};
