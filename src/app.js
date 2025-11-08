const express = require("express");
const cors = require("cors");

const tailorRoutes = require("./routes/tailor.routes");
const ApiError = require("./handlers/ApiError");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", tailorRoutes);

app.get("/", (req, res) => {
    res.send("✅ Backend running");
});

// error handler
app.use((err, req, res, next) => {
    console.error("Global Error:", err);

    if (err instanceof ApiError) {
        return res.status(err.status).json({
            status: err.status,
            message: err.message,
        });
    }

    res.status(500).json({
        status: 500,
        message: "Internal Server Error",
    });
});

module.exports = app;