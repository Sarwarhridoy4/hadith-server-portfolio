"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const hadithSchema = new mongoose_1.default.Schema({
    hadith: { type: String, required: true },
    narrator: { type: String, required: true },
    source: { type: String, required: true },
    reference: { type: String, required: true },
});
const Hadith = mongoose_1.default.model("Hadith", hadithSchema);
exports.default = Hadith;
