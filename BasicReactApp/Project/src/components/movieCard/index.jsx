

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite'
import Grid from "@mui/material/Grid";

export default function MovieCard({movie}) {
  const {original_title,release_date,overview,vote_average}=movie;
  return (
    
    
         <Card sx={{ maxWidth: 345}}>
      <CardMedia
        sx={{ height:500, width:"auto"}}
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        title="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
         {original_title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {overview}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button size="small"></Button>
          <Typography variant="body2" sx={{ color: 'black', fontSize: 14, fontWeight:'bold' }}>
          Rating:{vote_average}
        </Typography>
      </CardActions>
    </Card>
    
    
   
  );
}