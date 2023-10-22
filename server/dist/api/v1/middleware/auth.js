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
exports.requireAuth = exports.generateJWT = exports.comparePasswords = exports.generatePassword = void 0;
const config_1 = require("../../../config/config");
const bcrypt = __importStar(require("bcrypt"));
const jwt = __importStar(require("jsonwebtoken"));
const constants_1 = require("../../../utils/constants");
function generatePassword(password) {
    return __awaiter(this, void 0, void 0, function* () {
        const saltRounds = 10;
        const salt = yield bcrypt.genSalt(saltRounds);
        return yield bcrypt.hash(password, salt);
    });
}
exports.generatePassword = generatePassword;
function comparePasswords(password, hash) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcrypt.compare(password, hash);
    });
}
exports.comparePasswords = comparePasswords;
function generateJWT(user) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!config_1.config.secret) {
            throw new Error("JWT secret is not configured.");
        }
        return jwt.sign(user, config_1.config.secret, { expiresIn: constants_1.EXPIRES_IN });
    });
}
exports.generateJWT = generateJWT;
function requireAuth(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!req.headers || !req.headers.authorization) {
            return res.status(401).send({ message: "No authorization headers." });
        }
        const tokenBearer = req.headers.authorization.split(" ");
        if (tokenBearer.length != 2) {
            return res.status(401).send({ message: "Malformed token." });
        }
        if (!config_1.config.secret) {
            throw new Error("JWT secret is not configured.");
        }
        const token = tokenBearer[1];
        return jwt.verify(token, config_1.config.secret, (err, decoded) => {
            if (err) {
                return res
                    .status(500)
                    .send({ auth: false, message: "Failed to authenticate." });
            }
            return next();
        });
    });
}
exports.requireAuth = requireAuth;
// export function isAgent(req: Request, res: Response, next: NextFunction) {
//   if (req.user.role !== 'agent') {
//     return res.status(401).send({ message: "Unauthorized" });
//   }
//   return next();
// }
// export function isAmin(req: Request, res: Response, next: NextFunction) {
//   if (req.user.role !== 'admin') {
//     return res.status(401).send({ message: "Unauthorized" });
//   }
//   return next();
// }
//# sourceMappingURL=auth.js.map