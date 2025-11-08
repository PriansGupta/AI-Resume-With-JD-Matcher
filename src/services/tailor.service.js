const openai = require("../config/openai");
const { TailorResponse } = require("../models/tailor.model");

class TailorService {
    async tailorResume(latex, jobDescription) {
        const prompt = `
        You are an expert technical resume editor.
        Given:
        1. A LaTeX resume.
        2. A job description.

        Task:
        Tailor the LaTeX resume to highlight relevant skills and experiences matching the job description.
        Return only valid LaTeX code — no markdown or commentary.

        ----------------
        JOB DESCRIPTION:
        ${jobDescription}

        ----------------
        RESUME (LaTeX):
        ${latex}
        `;

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a helpful resume tailoring assistant." },
                { role: "user", content: prompt },
            ],
            temperature: 0.7,
        });

        const tailoredLatex = response.choices?.[0]?.message?.content?.trim() || "";
        return new TailorResponse(tailoredLatex);
    }
}

module.exports = TailorService;