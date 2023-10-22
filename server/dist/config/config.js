"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    secret: process.env.SECRET,
    port: process.env.PORT,
    email: process.env.EMAIL,
    pass: process.env.PASS,
};
//# sourceMappingURL=config.js.map