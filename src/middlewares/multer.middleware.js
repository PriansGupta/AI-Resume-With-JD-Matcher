const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Create uploads folder if not present
const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Multer storage config
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadDir),
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "application/x-tex" || file.originalname.endsWith(".tex")) {
        cb(null, true);
    } else {
        cb(new Error("Only .tex files are allowed!"), false);
    }
};

module.exports = multer({ storage, fileFilter });
