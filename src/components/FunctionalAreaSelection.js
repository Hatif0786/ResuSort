import React from 'react';
import PropTypes from 'prop-types';
import { functionalAreas } from '../data/jobData';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography
} from '@mui/material';

export default function FunctionalAreaSelection({ onSelect, selectedArea }) {
  const handleChange = (event) => {
    onSelect(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        Select Functional Area
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="functional-area-label">Functional Area</InputLabel>
        <Select
          labelId="functional-area-label"
          id="functional-area"
          value={selectedArea}
          label="Functional Area"
          onChange={handleChange}
        >
          {functionalAreas.map((area) => (
            <MenuItem key={area} value={area}>
              {area}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

FunctionalAreaSelection.propTypes = {
  onSelect: PropTypes.func.isRequired,
  selectedArea: PropTypes.string
};

