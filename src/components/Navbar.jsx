import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ handleSearchChange }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {setAnchorEl(null);};

  const handleFilter = (e) => {
    setAnchorEl(null);
    handleSearchChange(e);
  }

  return (
    <AppBar position="static" color="error" sx={{ mb: 2 }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          aria-controls={open ? 'gen-filter' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pokédex
        </Typography>
        <Menu
          id="gen-filter"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'gen-filter',
          }}
        >
          <MenuItem divider onClick={() => {handleFilter("")}}>All</MenuItem>
          <MenuItem divider onClick={() => {handleFilter("1")}}>Gen I</MenuItem>
          <MenuItem divider onClick={() => {handleFilter("2")}}>Gen II</MenuItem>
          <MenuItem divider onClick={() => {handleFilter("3")}}>Gen III</MenuItem>
          <MenuItem divider onClick={() => {handleFilter("4")}}>Gen IV</MenuItem>
          <MenuItem divider onClick={() => {handleFilter("5")}}>Gen V</MenuItem>
          <MenuItem divider onClick={() => {handleFilter("6")}}>Gen VI</MenuItem>
          <MenuItem onClick={() => {handleFilter("7")}}>Gen VII</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar