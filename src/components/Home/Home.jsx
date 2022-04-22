import React           from 'react';
import { makeStyles }  from '@material-ui/core/styles';
import Button          from '@material-ui/core/Button';
import Header          from '../Header/Header';
import BackgroundImege from '../../images/abstract-red-and-orange-liquid-background-picjumbo-com.jpeg';
import                      './Home.css';
import                      './Home.res.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin     : theme.spacing(1),
            color      : 'cyan',
            borderColor: 'cyan'
        }
    }
}));

const Home = (props) => {
    const classes = useStyles();

    return (
        <div className="Home">
            <Header COLOR='cyan' />  
            <img src={ BackgroundImege } className="home-background" />
            <h1 className="home-title">SUBABA</h1>
            <p className="home-dot-under-button"></p>
            <ul className="home-nav-list">
                <li className={ classes.root }>
                    <Button variant="outlined" onClick={() => {
                        props.history.push('');
                    }}>
                        Home
                    </Button>
                </li>
                <li className={ classes.root }>
                    <Button variant="outlined" onClick={() => {
                        props.history.push('about');
                    }}>
                        About
                    </Button>
                </li>
                <li className={ classes.root }>
                    <Button variant="outlined" onClick={() => {
                        props.history.push('passion');
                    }}>
                        Passion
                    </Button>
                </li>
                <li className={ classes.root }>
                    <Button variant="outlined" onClick={() => {
                        props.history.push('strength');
                    }}>
                        Strength
                    </Button>
                </li>
                <li className={ classes.root }>
                    <Button variant="outlined" onClick={() => {
                        props.history.push('contact');
                    }}>
                        Contact
                    </Button>
                </li>
            </ul>
            <ul className="home-link-list">
                <a href="https://twitter.com/subaba_design">
                    <li className={ classes.root }>
                        <Button>
                            Twitter
                        </Button>
                    </li>
                </a>
                <a href="https://subaba-design.com/">
                    <li className={ classes.root }>
                        <Button>
                            Blog
                        </Button>
                    </li>
                </a>
                <a href="https://github.com/subaba-design">
                    <li className={ classes.root }>
                        <Button>
                            GitHub
                        </Button>
                    </li>
                </a>
            </ul>
        </div>
    );
};

export default Home;