import React from "react";
import "./Footer.css";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        color: 'cyan',
        borderColor: 'cyan'
      },
    },
    second: {
        '& > *': {
          margin: theme.spacing(1),
          color: 'cyan',
          borderColor: 'cyan'
        },
      },
  }));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className="Footer">
            <h1 className="footer-logo">Against All Odds</h1>
            <nav className="footer-nav">
                <ul className="footer-list">
                    <li className={classes.root}>
                        <Button variant="outlined">
                            Home
                        </Button>
                    </li>
                    <li className={classes.root}>
                        <Button variant="outlined">
                            About
                        </Button>
                    </li>
                    <li className={classes.root}>
                        <Button variant="outlined">
                            Passion
                        </Button>
                    </li>
                    <li className={classes.root}>
                        <Button variant="outlined">
                            Strength
                        </Button>
                    </li>
                    <li className={classes.root}>
                        <Button variant="outlined">
                            Contact
                        </Button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Footer;