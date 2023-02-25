"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.default = () => {
    const connect = () => {
        mongoose_1.default
            .connect(`mongodb+srv://victoredu22:Cz3mRMI1M7ayxSjW@cluster0.3xcjkc4.mongodb.net/db`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: true,
        })
            .then((db) => {
            console.log("Database Connected Successfuly.");
        })
            .catch((err) => {
            console.log("Error Connectiong to the Database");
        });
    };
    connect();
};
