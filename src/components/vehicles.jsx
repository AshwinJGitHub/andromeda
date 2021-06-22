import React, { useState, useEffect } from 'react';
// import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ClippedDrawer from "./filter";
// import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },

}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const url = "http://localhost:5000/api/vehicles";

export default function Vehicles() {
  const [vehiclesData, setVehiclesData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log('Fetching data...');
    // const vehicles = await fetch(url, { method: 'GET'});
    fetch(url)
      .then(res => res.json())
      .then((result) => {
        console.log(result);
        setVehiclesData(result);
        setIsLoaded(true);
      },
        (error) => {
          console.log(error);
        })
    console.log(vehiclesData);
    console.log('Finished fetching data');
  }, [isLoaded]);

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <ClippedDrawer />
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          {vehiclesData && <Grid container spacing={4}>
            {vehiclesData.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title={card.make + ' ' + card.model}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {`${card.make}, ${card.model}`}
                    </Typography>
                    <Typography>
                      {card.image}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>}
        </Container>
      </main>
    </React.Fragment>
  );
}
