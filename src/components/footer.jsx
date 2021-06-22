// import { Image } from 'react'
// import logo from '../media/logo.png'
// const FooterComp = () => {
//   return <footer className="footer">
//     <h3>Copyright © Auto Galaxy 2021</h3>
//   </footer>

// }
// export default FooterComp


import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Auto Galaxy
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({

  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Footer */}
      <footer className={classes.footer}>

        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}