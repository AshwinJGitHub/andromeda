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
    <Typography variant="body2" color="textSecondary" align="center" width="95%">
      <Link color="inherit" href="#">
        {'Copyright © '}
        Auto Galaxy
        {new Date().getFullYear()}
        {'.'}
      </Link>{' '}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({

  footer: {
    backgroundColor: "#3f51b5",

    position: "fixed",
    width: "95%",
    size: "5%",
    bottom: 0,
    contentAlign: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div data-testid="appFooter" role="region" aria-label="footer">
        <CssBaseline />
        {/* Footer */}
        <footer className={classes.footer}>

          <Copyright />
        </footer>
        {/* End footer */}
      </div>
    </React.Fragment>
  );
}