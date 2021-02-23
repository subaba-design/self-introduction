import React          from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button         from '@material-ui/core/Button';
import FlightIcon     from '@material-ui/icons/Flight';
import                     './Footer.css';
import                     './Footer.res.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            color: 'rosybrown',
            borderColor: 'rosybrown'
        }
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className="Footer">
            <div className="footer-line"></div>
            <h1 className="footer-logo">Yopipo</h1>
            <ul className="footer-nav-list">
                <li className={ classes.root }>
                    <Button variant="outlined">
                        Apple
                    </Button>
                </li>
                <li className={ classes.root }>
                    <Button variant="outlined">
                        Banana
                    </Button>
                </li>
                <li className={ classes.root }>
                    <Button variant="outlined">
                        Peach
                    </Button>
                </li>
                <li className={ classes.root }>
                    <Button variant="outlined">
                        Orange
                    </Button>
                </li>
                <li className={ classes.root }>
                    <Button variant="outlined">
                        Lemon
                    </Button>
                </li>
            </ul>
            <span className="footer-nenu-icon">
                <FlightIcon/>
            </span>
        </div>
    );
}

export default Footer;