import React, { useState } from 'react';
import axios from 'axios';

const FileDisplay = () => {
  const [fileId, setFileId] = useState('');
  const [fileData, setFileData] = useState(null);
  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileIdChange = (e) => {
    setFileId(e.target.value);
  };

  const handleGetFile = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await axios.get(`http://localhost:8080/api/files/${fileId}`, {
        // responseType: 'arraybuffer',
      });

      // Get the file name from the response headers
      const contentDisposition = response.headers['content-disposition'];
      const fileNameMatch = contentDisposition && contentDisposition.match(/filename="(.+)"/);
      const fileName = fileNameMatch ? fileNameMatch[1] : 'Unknown File';
      
      setFileName(response.data.file_name);

      // Convert the ArrayBuffer to a data URL
      const blob = new Blob([response.data], { type: 'application/octet-stream' });
      const dataUrl = URL.createObjectURL(blob);
      setFileData(dataUrl);
    } catch (error) {
      console.error('Error getting file:', error);
      setError('Error fetching file. Please try again.'); // Update with more specific error messages if needed
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Enter File ID" onChange={handleFileIdChange} />
      <button onClick={handleGetFile} disabled={loading}>
        Get File
      </button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {fileData && (
        <div>
          <p>File Name: {fileName}</p>
          <img src={fileData} alt={fileName} />
        </div>
      )}
    </div>
  );
};

export default FileDisplay;
