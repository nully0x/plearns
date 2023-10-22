"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config/config");
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const constants_1 = require("./utils/constants");
const auth_1 = require("./api/v1/auth");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = config_1.config.port;
app.use((0, cors_1.default)({
    allowedHeaders: [
        "Origin",
        "X-Requested-With",
        "Content-Type",
        "Accept",
        "X-Access-Token",
        "Authorization",
    ],
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    origin: constants_1.ALLOWED_ORIGINS,
}));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.get("/", (req, res) => res.send("welcome to PLEarn API!"));
(0, auth_1.authRoutes)(app);
app.listen(port, () => console.log(`listening on port ${port}`));
//# sourceMappingURL=server.js.map