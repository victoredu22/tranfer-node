"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validateCreate = [
    (0, express_validator_1.body)("code")
        .isNumeric()
        .withMessage("code must be a number")
        .exists()
        .withMessage("rut must be a provided"),
    (0, express_validator_1.body)("name")
        .isString()
        .withMessage("name must be a string")
        .exists()
        .withMessage("rut must be a provided"),
];
exports.default = {
    validateCreate,
};
