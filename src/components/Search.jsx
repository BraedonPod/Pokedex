import React from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import ClearAllIcon from '@mui/icons-material/ClearAll';

const Search = ({ handleSearchChange }) => {

  const handleClear = () => {
    document.getElementById("search").value = "";
    handleSearchChange('');
  }

  return (
    <Paper
      elevation={4}
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', minWidth: '200px', maxWidth: '400px', margin: 'auto', mb: 2 }}
    >
      <InputBase
        id="search"
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Pokémon"
        inputProps={{ 'aria-label': 'search Pokémon' }}
        onChange={(event) => handleSearchChange(event.target.value)}
      />
      <IconButton sx={{ p: '10px' }} aria-label="search" onClick={handleClear}>
        <ClearAllIcon />
      </IconButton>
    </Paper>
  )
}

export default Search