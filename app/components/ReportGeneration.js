'use client'

import { PDFDocument, rgb } from 'pdf-lib'
import styles from './ReportGeneration.module.css'

export default function ReportGeneration({ result, functionalArea, designation }) {
  const generatePDF = async () => {
    const pdfDoc = await PDFDocument.create()
    const page = pdfDoc.addPage()
    const { width, height } = page.getSize()
    const fontSize = 12

    page.drawText('ResuSort Analysis Report', {
      x: 50,
      y: height - 50,
      size: 20,
      color: rgb(0, 0, 0),
    })

    page.drawText(`Functional Area: ${functionalArea}`, {
      x: 50,
      y: height - 80,
      size: fontSize,
      color: rgb(0, 0, 0),
    })

    page.drawText(`Designation: ${designation}`, {
      x: 50,
      y: height - 100,
      size: fontSize,
      color: rgb(0, 0, 0),
    })

    page.drawText(`Overall Score: ${result.score}%`, {
      x: 50,
      y: height - 130,
      size: fontSize,
      color: rgb(0, 0, 0),
    })

    page.drawText(`Keyword Match: ${result.keywordMatch}%`, {
      x: 50,
      y: height - 150,
      size: fontSize,
      color: rgb(0, 0, 0),
    })

    const pdfBytes = await pdfDoc.save()
    const blob = new Blob([pdfBytes], { type: 'application/pdf' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'ResuSort_Analysis_Report.pdf'
    link.click()
  }

  return (
    <div className={styles.container}>
      <button onClick={generatePDF} className={styles.button}>
        Generate PDF Report
      </button>
    </div>
  )
}

