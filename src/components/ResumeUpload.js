import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const ResumeUpload = ({ onUpload, currentFile }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      onUpload(file);
    } else {
      alert('Please upload a PDF file');
    }
  };

  return (
    <Box sx={{ textAlign: 'center' }}>
      <input
        accept="application/pdf"
        style={{ display: 'none' }}
        id="resume-upload"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="resume-upload">
        <Button
          variant="outlined"
          component="span"
          startIcon={<CloudUploadIcon />}
          sx={{ mb: 2 }}
        >
          Upload Resume (PDF)
        </Button>
      </label>
      
      {currentFile && (
        <Typography variant="body2" color="textSecondary">
          Selected file: {currentFile.name}
        </Typography>
      )}
    </Box>
  );
};

export default ResumeUpload;

