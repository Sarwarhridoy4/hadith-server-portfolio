"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const hadithController_1 = require("../controllers/hadithController");
const router = (0, express_1.Router)();
router.get('/all-hadith', hadithController_1.getAllHadith);
router.get('/random-hadith', hadithController_1.getRandomHadith);
router.get('/search/:field/:query', hadithController_1.searchHadith);
router.get('/', hadithController_1.welcomeMessage);
exports.default = router;
