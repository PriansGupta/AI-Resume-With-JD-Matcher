class TailorRequest {
    constructor(latex, jobDescription) {
        if (!latex || !jobDescription) {
            throw new Error("Both latex and jobDescription are required.");
        }
        this.latex = latex;
        this.jobDescription = jobDescription;
    }
}

class TailorResponse {
    constructor(tailoredLatex) {
        this.tailoredLatex = tailoredLatex;
    }
}

module.exports = {
    TailorRequest,
    TailorResponse
};