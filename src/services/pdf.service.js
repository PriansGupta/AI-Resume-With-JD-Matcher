const { exec } = require("child_process");
const fs = require("fs").promises;
const path = require("path");

class PdfService {
  async latexToPdf(latexContent) {
    const fileName = `resume_${Date.now()}`;
    const texPath = path.join("uploads", `${fileName}.tex`);
    const pdfPath = path.join("uploads", `${fileName}.pdf`);

    // save .tex file
    await fs.writeFile(texPath, latexContent, "utf8");

    // compile latex
    await new Promise((resolve, reject) => {
      exec(`pdflatex -interaction=nonstopmode -output-directory uploads ${texPath}`, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });

    // read pdf buffer
    const pdfBuffer = await fs.readFile(pdfPath);

    // cleanup
    await fs.unlink(texPath).catch(() => { });
    await fs.unlink(pdfPath).catch(() => { });

    return pdfBuffer;
  }
}

module.exports = PdfService;
