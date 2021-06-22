// // import { Image } from 'react'
// import Typography from "@material-ui/core/Typography";
// import logo from '../media/logo.png'
// const HeaderComp = () => {
//   return <header className="header">
//     <Typography color="textPrimary" gutterBottom variant="h2" align="center">
//       Auto Galaxy
//   </Typography>
//     {/* <h1>Auto Galaxy</h1> */}
//     <div role="img" className="header-right">
//       <img className="logo-img" src={logo} alt="Logo of galaxy surrounding a car" />
//     </div>
//   </header>

// }
import Box from '@material-ui/core/Box';

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import logoImg from '../media/logo.png'
import CssBaseline from '@material-ui/core/CssBaseline';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));



export default function HeaderComp() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" data-testid="appHeader" role="region" aria-label="header">
        <Toolbar display="flex" p={1} bgcolor="background.paper">

          <Box p={1} width="15%" >

          </Box>
          <Box p={1} width="65%" textAlign="center">
            <Typography variant="h1" color="inherit" noWrap>
              Auto Galaxy
          </Typography>
          </Box>
          <Box p={1} width="15%" textAlign="right">
            <img aria-label="logo" className="logo-img" src={logoImg} alt="Logo of galaxy surrounding a car" height="100px;" width="100px;" />
          </Box>

          {/* <Typography variant="h1" color="inherit" noWrap>
            Auto Galaxy
          </Typography>
          <img className="logo-img" src={logoImg} alt="Logo of galaxy surrounding a car" height="100px;" width="100px;" /> */}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}