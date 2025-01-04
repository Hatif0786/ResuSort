import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography
} from '@mui/material';
import { getDesignationsForArea } from '../data/jobData';

const DesignationSelection = ({ functionalArea, onSelect }) => {
  const designations = getDesignationsForArea(functionalArea);

  const handleChange = (event) => {
    onSelect(event.target.value);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Select Designation
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="designation-label">Designation</InputLabel>
        <Select
          labelId="designation-label"
          id="designation"
          label="Designation"
          onChange={handleChange}
        >
          {designations.map((designation) => (
            <MenuItem key={designation} value={designation}>
              {designation}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

DesignationSelection.propTypes = {
  functionalArea: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default DesignationSelection;

