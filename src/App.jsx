import React, { useState, useEffect } from 'react';
import { fetchPokemonData } from './api';
import './App.css';

import Navbar from './components/Navbar';
import Search from './components/Search';
import Cards from './components/Cards';
import ModalView from './components/ModalView';

import { Container, Grid, CircularProgress } from '@mui/material';

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [poke, setPoke] = useState({});
  const [filter, setFilter] = useState('1');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setPokemon(fetchPokemonData());
  }, [])

  const handleSearchChange = (event) => { setFilter(event); }
  const handleOpen = (p) => { setOpen(true); setPoke(p) }
  const handleClose = () => { setOpen(false); setPoke({}) }
  const handleEvolution = (p) => { setOpen(false); setPoke(p); setOpen(true); }

  return (
    <React.Fragment>
      <Navbar handleSearchChange={handleSearchChange} />
      <Container>
        <Search handleSearchChange={handleSearchChange} />
        {pokemon.length !== 0 ? (
          <Grid container spacing={2} sx={{ mb: 2 }}>
            {// eslint-disable-next-line
              pokemon.map(poke => {
                if (poke.generation.toString() === filter || poke.name.toLowerCase().match(filter.toLocaleLowerCase()))
                  return (<Cards key={poke.id} pokemon={poke} handleOpen={handleOpen} />)
              })}
          </Grid>
        ) : <CircularProgress />
        }
        {Object.keys(poke).length !== 0 ? (
          <ModalView
            open={open}
            handleClose={handleClose}
            pokemon={poke}
            evolution={pokemon}
            handleEvolution={handleEvolution}
          />
        ) : <></>}
      </Container>
    </React.Fragment>
  )
}

export default App