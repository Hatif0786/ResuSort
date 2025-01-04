import React, { useState } from 'react';
import FunctionalAreaSelection from './FunctionalAreaSelection';
import DesignationSelection from './DesignationSelection';
import { Box } from '@mui/material';

const ResumeBuilder = () => {
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedDesignation, setSelectedDesignation] = useState('');

  const handleAreaSelect = (area) => {
    setSelectedArea(area);
  };

  const handleDesignationSelect = (designation) => {
    setSelectedDesignation(designation);
  };

  return (
    <Box sx={{ p: 3 }}>
      <FunctionalAreaSelection 
        onSelect={handleAreaSelect} 
        selectedArea={selectedArea}
      />
      <DesignationSelection 
        functionalArea={selectedArea}
        onSelect={handleDesignationSelect}
      />
    </Box>
  );
};

export default ResumeBuilder; 