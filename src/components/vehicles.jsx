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

const url = "http://localhost:5000/api/vehicles";



export default function Vehicles() {
  const [filteredVehiclesData, setFilteredVehiclesData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [vehiclesData, setVehiclesData] = useState();
  
  const sendDataToParent = (fieldType, value) => { // the callback. Use a better name
    if (value) {
      console.log(fieldType, value, "sendDataToParent got called");
      let data = vehiclesData.filter(x => x[fieldType.toLowerCase()] === value);
      setFilteredVehiclesData(data);
    } else {
      setFilteredVehiclesData(vehiclesData);
    }
  };
  const sendFilterToParent = (searchValue) => { // the callback. Use a better name
    if (searchValue) {
      console.log("searchValue", searchValue)
      console.log("")
      let data = vehiclesData.filter(x => x.make.toLowerCase().includes(searchValue.toLowerCase()) || x.model.toLowerCase().includes(searchValue.toLowerCase()) || (x.year + "").includes(searchValue));
      setFilteredVehiclesData(data);
    } else {
      setFilteredVehiclesData(vehiclesData);
    }
  };

  useEffect(() => {
    console.log('Fetching data...');
    fetch(url)
      .then(res => res.json())
      .then((result) => {
        console.log(result);
        setFilteredVehiclesData(result);
        setIsLoaded(true);

        setVehiclesData([...result]);
      },
        (error) => {
          console.log(error);
        })
    console.log(filteredVehiclesData);
    console.log('Finished fetching data');
  }, [isLoaded]);

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {vehiclesData && <ClippedDrawer vehicleFields={vehiclesData} sendDataToParent={sendDataToParent} sendFilterToParent={sendFilterToParent} />}
        <Container className={classes.cardGrid} maxWidth="md">
          {filteredVehiclesData && <Grid container spacing={4}>
            {filteredVehiclesData.map((card) => (
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
