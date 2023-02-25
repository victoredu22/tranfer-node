"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const body_parser_1 = __importDefault(require("body-parser"));
const connect_1 = __importDefault(require("./connect"));
const index_1 = __importDefault(require("./Routes/index"));
const cors = require("cors");
const app = (0, express_1.default)();
const env = app.get("env");
app.use(cors());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
const PORT = 3000;
(0, connect_1.default)();
app.use("/api", index_1.default);
app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
});
