"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Bank_model_1 = __importDefault(require("../Models/Bank.model"));
const Create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const bank = yield Bank_model_1.default.create(data);
        return res.status(201).json(bank);
    }
    catch (e) {
        const error = e;
        return res.status(500).json({ status: error });
    }
});
const Index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bank = yield Bank_model_1.default.find();
        return res.status(201).json(bank);
    }
    catch (e) {
        const error = e;
        return res.status(500).json({ status: error });
    }
});
exports.default = { Create, Index };
