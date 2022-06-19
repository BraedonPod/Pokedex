import React from 'react';
import { Card, Grid, CardMedia, CardActionArea, CardContent, Typography, CardHeader } from '@mui/material';

const Cards = ({ pokemon, handleOpen }) => {
  return (
    <Grid item xs={6} sm={3}>
      <Card className={pokemon.typeofpokemon[0]}>
        <CardActionArea onClick={() => { handleOpen(pokemon) }}>
          <CardHeader
            title={('00' + pokemon.id).slice(-3)}
            sx={{ color: 'white', textShadow: '1px 1px 3px black' }}
          />
          <CardMedia
            component="img"
            alt={pokemon.name}
            height="140"
            image={pokemon.imageurl}
            title={pokemon.name}
            sx={{ objectFit: 'scale-down' }}
          />
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              align="center"
              sx={{ color: 'white', textShadow: '1px 1px 3px black' }}
            >
              {pokemon.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid >
  )
}

export default Cards