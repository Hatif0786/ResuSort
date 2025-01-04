import React from 'react';
import { PDFDocument, rgb } from 'pdf-lib';
import './ReportGeneration.css';

export default function ReportGeneration({ result, functionalArea, designation, yearsOfExperience }) {
  const generatePDF = async () => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const { height } = page.getSize();
    const fontSize = 12;

    page.drawText('ResuSort Analysis Report', {
      x: 50,
      y: height - 50,
      size: 20,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Functional Area: ${functionalArea}`, {
      x: 50,
      y: height - 80,
      size: fontSize,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Designation: ${designation}`, {
      x: 50,
      y: height - 100,
      size: fontSize,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Years of Experience: ${yearsOfExperience}`, {
      x: 50,
      y: height - 120,
      size: fontSize,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Overall Score: ${result.score}%`, {
      x: 50,
      y: height - 150,
      size: fontSize,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Keyword Match: ${result.keywordMatch}%`, {
      x: 50,
      y: height - 170,
      size: fontSize,
      color: rgb(0, 0, 0),
    });

    page.drawText('Missing Keywords:', {
      x: 50,
      y: height - 200,
      size: fontSize,
      color: rgb(0, 0, 0),
    });

    result.missingKeywords.forEach((keyword, index) => {
      page.drawText(`- ${keyword}`, {
        x: 70,
        y: height - 220 - index * 20,
        size: fontSize,
        color: rgb(0, 0, 0),
      });
    });

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'ResuSort_Analysis_Report.pdf';
    link.click();
  };

  return (
    <div className="report-generation">
      <button onClick={generatePDF} className="generate-pdf-button">
        Generate PDF Report
      </button>
    </div>
  );
}

