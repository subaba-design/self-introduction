import React           from 'react';
import { makeStyles }  from '@material-ui/core/styles';
import Button          from '@material-ui/core/Button';
import Header          from "../Header/Header";
import BackgroundImege from '../../images/abstract-red-and-orange-liquid-background-picjumbo-com.jpg';
import                      './Home.css';
import                      './Home.res.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            color: 'cyan',
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
            <h1 className="home-title">MASAYA FUKAI</h1>
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
                <a href="https://twitter.com/yopipo415">
                    <li className={ classes.root }>
                        <Button>
                            Twitter
                        </Button>
                    </li>
                </a>
                <a href="https://let-there-be-magic.com/">
                    <li className={ classes.root }>
                        <Button>
                            Blog
                        </Button>
                    </li>
                </a>
                <a href="https://qiita.com/Yopipo415">
                    <li className={ classes.root }>
                        <Button>
                            Qiita
                        </Button>
                    </li>
                </a>
                <a href="https://github.com/Yopipo415">
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