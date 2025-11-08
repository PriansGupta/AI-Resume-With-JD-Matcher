const express = require("express");
const router = express.Router();

const handleTailorRequest = require("../controllers/tailor.controller").handleTailorRequest;
const upload = require("../middlewares/multer.middleware");

// Accept file or raw JSON
router.post("/tailor", upload.single("latexFile"), handleTailorRequest);

module.exports = router;
