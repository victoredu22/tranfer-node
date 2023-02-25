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
const Payee_model_1 = __importDefault(require("../Models/Payee.model"));
const Tranfer_model_1 = __importDefault(require("../Models/Tranfer.model"));
const createTranfer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const Payee = yield Payee_model_1.default.findOne({
            rut: data.rut,
        });
        const tranfer = yield Tranfer_model_1.default.create({
            payee: Payee === null || Payee === void 0 ? void 0 : Payee._id,
            amount: data.amount,
        });
        return res.status(201).json({ tranfer });
    }
    catch (e) {
        const error = e;
        return res.status(500).json({ status: error });
    }
});
const Index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        Tranfer_model_1.default.find({}).populate('payee')
            .exec(function (error, result) {
            return res.json(result);
        });
    }
    catch (e) {
        const error = e;
        return res.status(500).json({ status: error });
    }
});
exports.default = {
    createTranfer,
    Index
};
