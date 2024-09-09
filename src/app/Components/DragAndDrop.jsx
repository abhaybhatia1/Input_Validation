import React, { useState } from 'react';
import * as XLSX from 'xlsx'; // Import XLSX to handle Excel files
import Papa from 'papaparse'; // Import PapaParse to handle CSV files

function DragAndDrop() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    convertFileToJson(e.target.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
    convertFileToJson(e.dataTransfer.files[0]);
  };

  const convertFileToJson = (selectedFile) => {
    if (!selectedFile) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target.result;

      // Check file type and handle accordingly
      if (selectedFile.name.endsWith('.xlsx')) {
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 }); // Use header: 1 to use first row as keys
        const headers = jsonData.shift(); // Remove headers row.
        const formattedData = jsonData.map(row =>
          headers.reduce((obj, header, index) => {
            obj[header] = row[index];
            return obj;
          }, {})
        );
        console.log(formattedData);
      } else if (selectedFile.name.endsWith('.csv')) {
        Papa.parse(data, {
          header: true,
          complete: function(results) {
            console.log(results.data); // results.data contains parsed CSV data with headers
          }
        });
      }
    };

    reader.readAsBinaryString(selectedFile);
  };

  return (
    <div>
      <div
        className="flex flex-col items-center"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <label
          className="w-full flex flex-col items-center px-4 py-6 bg-gray-100 text-gray-700 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-blue-600 transition duration-300"
          htmlFor="file-upload"
        >
          <svg
            className="w-12 h-12 mb-2 text-blue-600"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16.88 7.92A7 7 0 1 0 10 17v-1.27A5.5 5.5 0 1 1 16.9 9h.58a1 1 0 0 0 0-2h-2a1 1 0 0 0-.84.45L13.18 8H12a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-1.1l.82-.85a7 7 0 0 0 3.16-.23zM9 11.2a1 1 0 0 1 2 0v1.8a1 1 0 0 1-2 0v-1.8z" />
          </svg>
          <span className="text-base leading-normal">Select or drag a file</span>
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
        {file && (
          <div className="mt-4 p-4 bg-gray-50 border border-gray-300 rounded-lg w-full text-center">
            <p className="text-sm text-gray-700">
              Selected file: <span className="font-semibold">{file.name}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DragAndDrop;
git 
