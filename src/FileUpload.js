// FileUploadComponent.js
import React, { useState } from 'react';
import axios from 'axios';

import './FileUpload.css';

const FileUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFileUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            await axios.post('http://localhost:8080/api/files/upload', formData);
            console.log('File uploaded successfully');
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div className='uploadbackground'>

            <div>
                <div>
                    <h2>Upload your reports here</h2>
                </div>

                <div className='uploadcontent'>
                    <input type="file" onChange={handleFileChange}/>
                    <button onClick={handleFileUpload}>Upload File</button>
                </div>
            </div>            
        </div>
    );
};

export default FileUpload;
