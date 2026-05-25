import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import { ReportData } from '../../../core/models';

@Injectable({
  providedIn: 'root',
})
export class ReportExportService {
  constructor() {}

  /**
   * Export report data as PDF
   * @param reportData The report data to export
   * @param fileName The name of the file without extension
   * @returns Observable<Blob> containing the PDF file
   */
  exportPdf(reportData: ReportData, fileName: string): Observable<Blob> {
    try {
      if (!reportData) {
        return throwError(() => new Error('Report data is required'));
      }

      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 15;
      let yPosition = margin;

      // Set font
      doc.setFontSize(16);
      doc.text(reportData.title || 'Report', margin, yPosition);
      yPosition += 10;

      // Add metadata
      doc.setFontSize(10);
      doc.text(`Report Type: ${reportData.reportType}`, margin, yPosition);
      yPosition += 6;
      doc.text(`Generated: ${new Date(reportData.generatedAt).toLocaleDateString()}`, margin, yPosition);
      yPosition += 6;

      if (reportData.dateRange) {
        const from = new Date(reportData.dateRange.from).toLocaleDateString();
        const to = new Date(reportData.dateRange.to).toLocaleDateString();
        doc.text(`Date Range: ${from} to ${to}`, margin, yPosition);
        yPosition += 6;
      }

      if (reportData.groupBy) {
        doc.text(`Grouped By: ${reportData.groupBy}`, margin, yPosition);
        yPosition += 6;
      }

      yPosition += 4;

      // Add summary if available
      if (reportData.summary && Object.keys(reportData.summary).length > 0) {
        doc.setFontSize(12);
        doc.text('Summary', margin, yPosition);
        yPosition += 6;

        doc.setFontSize(9);
        Object.entries(reportData.summary).forEach(([key, value]) => {
          const text = `${key}: ${typeof value === 'object' ? JSON.stringify(value) : value}`;
          if (yPosition > pageHeight - margin) {
            doc.addPage();
            yPosition = margin;
          }
          doc.text(text, margin, yPosition);
          yPosition += 5;
        });

        yPosition += 4;
      }

      // Add data table
      if (reportData.data && reportData.data.length > 0) {
        doc.setFontSize(12);
        doc.text('Data', margin, yPosition);
        yPosition += 6;

        // Get column headers
        const columns = Object.keys(reportData.data[0]);

        // Create table data
        const tableData: any[] = [];
        reportData.data.forEach((row) => {
          const rowData = columns.map((col) => {
            const value = row[col];
            return typeof value === 'object' ? JSON.stringify(value) : String(value);
          });
          tableData.push(rowData);
        });

        // Add table with autoTable if available, or simple text representation
        doc.setFontSize(9);
        const colWidth = (pageWidth - 2 * margin) / columns.length;
        const maxRows = Math.floor((pageHeight - yPosition - margin) / 6);

        // Add headers
        doc.setTextColor(100);
        columns.forEach((col, idx) => {
          doc.text(col, margin + idx * colWidth, yPosition);
        });
        yPosition += 6;
        doc.setTextColor(0);

        // Add rows
        let rowCount = 0;
        tableData.forEach((row) => {
          if (yPosition > pageHeight - margin - 6) {
            doc.addPage();
            yPosition = margin;
            rowCount = 0;
          }

          row.forEach((cell: string, idx: number) => {
            const text = cell.substring(0, 20);
            doc.text(text, margin + idx * colWidth, yPosition);
          });
          yPosition += 5;
          rowCount++;
        });
      }

      // Convert to blob
      const pdfBlob = doc.output('blob');
      return of(pdfBlob);
    } catch (error) {
      return throwError(() => error);
    }
  }

  /**
   * Export report data as Excel
   * @param reportData The report data to export
   * @param fileName The name of the file without extension
   * @returns Observable<Blob> containing the Excel file
   */
  exportExcel(reportData: ReportData, fileName: string): Observable<Blob> {
    try {
      if (!reportData) {
        return throwError(() => new Error('Report data is required'));
      }

      const workbook = XLSX.utils.book_new();

      // Create metadata sheet
      const metadata = [
        ['Report Title', reportData.title || 'Report'],
        ['Report Type', reportData.reportType],
        ['Generated Date', new Date(reportData.generatedAt).toLocaleDateString()],
        ['Date Range From', reportData.dateRange ? new Date(reportData.dateRange.from).toLocaleDateString() : ''],
        ['Date Range To', reportData.dateRange ? new Date(reportData.dateRange.to).toLocaleDateString() : ''],
        ['Grouped By', reportData.groupBy || 'N/A'],
        [],
      ];

      if (reportData.summary && Object.keys(reportData.summary).length > 0) {
        metadata.push(['Summary']);
        Object.entries(reportData.summary).forEach(([key, value]) => {
          metadata.push([key, typeof value === 'object' ? JSON.stringify(value) : String(value)]);
        });
      }

      const metadataSheet = XLSX.utils.aoa_to_sheet(metadata);
      XLSX.utils.book_append_sheet(workbook, metadataSheet, 'Metadata');

      // Create data sheet
      if (reportData.data && reportData.data.length > 0) {
        const dataSheet = XLSX.utils.json_to_sheet(reportData.data);
        XLSX.utils.book_append_sheet(workbook, dataSheet, 'Data');
      }

      // Generate Excel file
      XLSX.writeFile(workbook, `${fileName}.xlsx`);

      // Return the blob (we need to read it from the file)
      // For this, we'll create a blob directly
      return new Observable((observer) => {
        const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([wbout], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        observer.next(blob);
        observer.complete();
      });
    } catch (error) {
      return throwError(() => error);
    }
  }

  /**
   * Export report data as CSV
   * @param reportData The report data to export
   * @param fileName The name of the file without extension
   * @returns Observable<Blob> containing the CSV file
   */
  exportCsv(reportData: ReportData, fileName: string): Observable<Blob> {
    try {
      if (!reportData) {
        return throwError(() => new Error('Report data is required'));
      }

      let csv = '';

      // Add metadata as comments
      csv += `# Report: ${reportData.title || 'Report'}\n`;
      csv += `# Type: ${reportData.reportType}\n`;
      csv += `# Generated: ${new Date(reportData.generatedAt).toLocaleDateString()}\n`;

      if (reportData.dateRange) {
        const from = new Date(reportData.dateRange.from).toLocaleDateString();
        const to = new Date(reportData.dateRange.to).toLocaleDateString();
        csv += `# Date Range: ${from} to ${to}\n`;
      }

      if (reportData.groupBy) {
        csv += `# Grouped By: ${reportData.groupBy}\n`;
      }

      csv += '\n';

      // Add summary if available
      if (reportData.summary && Object.keys(reportData.summary).length > 0) {
        csv += '# Summary\n';
        Object.entries(reportData.summary).forEach(([key, value]) => {
          const val = typeof value === 'object' ? JSON.stringify(value) : String(value);
          csv += `# ${key}: ${val}\n`;
        });
        csv += '\n';
      }

      // Add data
      if (reportData.data && reportData.data.length > 0) {
        // Get headers
        const headers = Object.keys(reportData.data[0]);
        csv += this.escapeCsvLine(headers) + '\n';

        // Add rows
        reportData.data.forEach((row) => {
          const values = headers.map((header) => {
            const value = row[header];
            return typeof value === 'object' ? JSON.stringify(value) : String(value);
          });
          csv += this.escapeCsvLine(values) + '\n';
        });
      }

      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      return of(blob);
    } catch (error) {
      return throwError(() => error);
    }
  }

  /**
   * Escape CSV line values
   * @param values Array of values
   * @returns Escaped CSV line
   */
  private escapeCsvLine(values: string[]): string {
    return values
      .map((value) => {
        // Escape quotes and wrap in quotes if needed
        if (value.includes(',') || value.includes('"') || value.includes('\n')) {
          return `"${value.replace(/"/g, '""')}"`;
        }
        return value;
      })
      .join(',');
  }

  /**
   * Download a file
   * @param blob The blob to download
   * @param fileName The name of the file
   */
  downloadFile(blob: Blob, fileName: string): void {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    window.URL.revokeObjectURL(url);
  }
}
