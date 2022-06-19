import React from 'react';
import { Box, Button, Typography, Modal, Chip, Stack, CardMedia, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ModalView = ({ open, handleClose, pokemon, evolution, handleEvolution }) => {

  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Pokemon-Modal"
        aria-describedby="Pokemon-Details-Modal"
        sx={{ overflowY: 'scroll' }}
      >
        <Box sx={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          margin: 'auto',
          p: '16px 16px 0px 16px',
          height: 'fit-content',
          minHeight: '100%',
        }}>
          <Box
            className={pokemon.typeofpokemon[0]}
            sx={{
              height: '25%',
              padding: '10px',
              margin: '-16px -16px 10px -16px',
              borderRadius: '0px 0px 40px 40px'
            }}>
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={handleClose}
              sx={{ p: 0, color: 'white' }}
            >
              Pokédex
            </Button>
            <Typography variant="h5" component="div"
              sx={{
                color: 'white',
                display: 'inline-flex',
                float: 'right'
              }}
            >
              {('00' + pokemon.id).slice(-3)}
            </Typography>
            <CardMedia
              component="img"
              height="160px"
              image={pokemon.imageurl}
              alt={pokemon.name}
              sx={{ objectFit: 'scale-down' }}
            />
          </Box>
          <Typography variant="h5" component="div" align="center" sx={{ m: 1 }}>
            {pokemon.name}
          </Typography>
          <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 2 }}>
            {pokemon.typeofpokemon.map(type => {
              return (<Chip
                key={type}
                className={type}
                label={type}
                sx={{ width: 90, color: 'white' }}
              />)
            })}
          </Stack>

          <Typography sx={{ mt: 2, mb: 1 }} align="center">{pokemon.xdescription}</Typography>

          <Typography variant="h6" component="div" align="center" sx={{ m: 1 }}>Weaknesses</Typography>

          <Box justifyContent="center" display="flex" sx={{ mb: 2 }}>
            <Stack
              className="Weaknesses"
              direction="row"
              spacing={1}
              justifyContent="flex-start"
            >
              {pokemon.weaknesses.map(weakness => {
                return (<Chip
                  key={weakness}
                  className={weakness}
                  label={weakness}
                  sx={{ color: 'white' }}
                />)
              })}
            </Stack>
          </Box>

          {pokemon.evolutions.length > 1 ?
            <>
              <Typography variant="h6" component="div" align="center" sx={{ m: 1 }}>Evolutions</Typography>
              <Grid container justifyContent="center" direction="row">
                {pokemon.evolutions.map(evo => {
                  return (
                    <Grid item xs={4} key={evo} textAlign="center" onClick={() => { handleEvolution(evolution[evo - 1]) }}>
                      <CardMedia
                        component="img"
                        image={evolution[evo - 1].imageurl}
                        alt={evolution[evo - 1].name}
                        sx={{ objectFit: 'scale-down', maxHeight: 200 }}
                      />
                      {evolution[evo - 1].name}<br />
                      <small>{evolution[evo - 1].reason}</small>
                    </Grid>
                  )
                })}
              </Grid>
            </>
            : <></>}
        </Box>
      </Modal>
    </React.Fragment>
  )
}

export default ModalView