import React from "react";
import './Header.css';
import Background from "../../images/abstract-red-and-orange-liquid-background-picjumbo-com.jpg";
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

const Header = () => {
    const classes = useStyles();

    return (
        <div className="Header">
            <img className="header-background" src={ Background } />
            <h1 className="header-logo">Against All Odds</h1>
            <h1 className="header-title">MASAYA FUKAI</h1>
            <nav className="header-nav">
                <ul className="header-list">
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
            <ul className="header-link-list">
                <li className={classes.second}>
                    <Button>
                        Twitter
                    </Button>
                </li>
                <li className={classes.second}>
                    <Button>
                        Blog
                    </Button>
                </li>
                <li className={classes.second}>
                    <Button>
                        Qiita
                    </Button>
                </li>
                <li className={classes.second}>
                    <Button>
                        GitHub
                    </Button>
                </li>
            </ul>
            <p className="scroll-line">
                <span>SCROLL →</span>
            </p>
        </div>
    );
};

export default Header;