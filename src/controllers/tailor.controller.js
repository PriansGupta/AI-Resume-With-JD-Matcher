const TailorService = require("../services/tailor.service");
const PdfService = require("../services/pdf.service");
const ApiResponse = require("../handlers/ApiResponse");
const ApiError = require("../handlers/ApiError");
const fs = require("fs/promises");


const tailorService = new TailorService();
const pdfService = new PdfService();

const handleTailorRequest = async (req, res, next) => {
    try {
        const file = req.file;
        const { latex, jobDescription } = req.body;

        if (!jobDescription) {
            return next(new ApiError(400, "Job description is required"));
        }

        let latexContent = latex;

        // Read from file if uploaded
        if (file) {
            latexContent = await fs.readFile(file.path, "utf-8");
            await fs.unlink(file.path); // cleanup
        }

        if (!latexContent) {
            return next(new ApiError(400, "No LaTeX found in request"));
        }

        // Tailor with OpenAI
        // const updatedLatex = await tailorService.tailorResume(
        //     latexContent,
        //     jobDescription
        // );

        // Convert updated LaTeX → PDF
        const pdfBuffer = await pdfService.latexToPdf(latexContent);

        const response = new ApiResponse(200, "Resume tailored successfully", {
            updatedLatex,
            pdfBase64: pdfBuffer.toString("base64")
        });

        res.status(200).json(response);
    } catch (err) {
        next(new ApiError(500, err.message));
    }
};

module.exports = {
    handleTailorRequest,
};