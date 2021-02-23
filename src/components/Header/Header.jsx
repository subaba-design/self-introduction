import React           from 'react';
import { makeStyles }  from '@material-ui/core/styles';
import Button          from '@material-ui/core/Button';
import GrainIcon       from '@material-ui/icons/Grain';
import BackgroundImege from '../../images/abstract-red-and-orange-liquid-background-picjumbo-com.jpg';
import                      './Header.css';
import                      './Header.res.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            color: 'cyan',
            borderColor: 'cyan'
        }
    },
    icon: {
        color: 'cyan',
        position: 'absolute',
        top: 32,
        right: 30,
        cursor: 'pointer'
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <div>
            <img src={ BackgroundImege } className="header-background" />
            <h1 className="header-logo">Against All Odds</h1>
            <span className="header-nenu-icon">
                <span className={ classes.icon }>
                    <GrainIcon/>
                </span>
            </span>
            <h1 className="header-title">MASAYA FUKAI</h1>
            <ul className="header-nav-list">
                <li className={ classes.root }>
                    <Button variant="outlined">
                        Home
                    </Button>
                </li>
                <li className={ classes.root }>
                    <Button variant="outlined">
                        About
                    </Button>
                </li>
                <li className={ classes.root }>
                    <Button variant="outlined">
                        Passion
                    </Button>
                </li>
                <li className={ classes.root }>
                    <Button variant="outlined">
                        Strength
                    </Button>
                </li>
                <li className={ classes.root }>
                    <Button variant="outlined">
                        Contact
                    </Button>
                </li>
            </ul>
            <ul className="header-link-list">
                <li className={ classes.root }>
                    <Button>
                        Twitter
                    </Button>
                </li>
                <li className={ classes.root }>
                    <Button>
                        Blog
                    </Button>
                </li>
                <li className={ classes.root }>
                    <Button>
                        Qiita
                    </Button>
                </li>
                <li className={ classes.root }>
                    <Button>
                        GitHub
                    </Button>
                </li>
            </ul>
            <p className="header-scroll-line">
                <span>SCROLL →</span>
            </p>
        </div>
    );
};

export default Header;