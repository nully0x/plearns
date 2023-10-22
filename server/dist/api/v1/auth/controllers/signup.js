"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const client_1 = require("@prisma/client");
const EmailValidator = __importStar(require("email-validator"));
const auth_1 = require("../../middleware/auth");
const prisma = new client_1.PrismaClient();
function signup(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password, fullName, phoneNumber } = req.body;
            if (!email || !EmailValidator.validate(email)) {
                return res
                    .status(400)
                    .send({ auth: false, message: "Email is required or malformed" });
            }
            if (!password) {
                return res
                    .status(400)
                    .send({ auth: false, message: "Password is required" });
            }
            if (!fullName) {
                return res
                    .status(400)
                    .send({ auth: false, message: "First name or last name is required" });
            }
            if (!phoneNumber) {
                return res
                    .status(400)
                    .send({ auth: false, message: "Phone number is required" });
            }
            const existingUser = yield prisma.user.findUnique({
                where: {
                    email: email,
                    phoneNumber: phoneNumber,
                },
            });
            if (existingUser) {
                return res
                    .status(422)
                    .send({ auth: false, message: "User already exist" });
            }
            const hashedPassword = yield (0, auth_1.generatePassword)(password);
            const user = yield prisma.user.create({
                data: {
                    email: email,
                    password: hashedPassword,
                    fullName: fullName,
                    phoneNumber: phoneNumber,
                },
            });
            const jwt = yield (0, auth_1.generateJWT)(user);
            yield prisma.$disconnect();
            res.status(201).send({ auth: true, token: jwt, user: user });
        }
        catch (error) {
            throw error;
        }
    });
}
exports.signup = signup;
//# sourceMappingURL=signup.js.map