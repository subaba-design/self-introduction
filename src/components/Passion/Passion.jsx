import React           from 'react';
import { makeStyles }  from '@material-ui/core/styles';
import Button          from '@material-ui/core/Button';
import Header          from '../Header/Header';
import BackgroundImage from '../../images/red-yellow-and-green-colorful-chilli-peppers-picjumbo-com.jpeg';
import                      './Passion.css';
import                      './Passion.res.css';

const useStyles = makeStyles(() => ({
  root: {
    '& > *': {
      color      : 'rgb(30, 255, 0)',
      borderColor: 'rgb(30, 255, 0)',
      marginTop  : -140,
      right      : 120,
      position   : 'absolute'
    }
  }
}));

const Passion = (props) => {
    const classes = useStyles();

    return (
        <div className="Passion">
          <Header COLOR='rgb(30, 255, 0)' />  
          <h1 className="passion-title">PASSION</h1>
          <p className="passion-text">
          プログラミングの創造力を知った時、私は衝撃的な魅力を感じました。
          私は物心ついたころから、何かを作るのが好きでした。
          それは工作などの有形のものはもちろんのこと、何かの計画を立てたりといった無形のものまで、
          一度作り出すと夢中になってしまいます。
          一度美術大学を志望して挫折してしまいましたが、２年間絵というクリエイティブと戦い続けた経験と、
          新しく知ったプログラミングという世界への情熱を、貴社に貢献という形でぶつけたいと思っています。
          </p>
          <img className="passion-image" src={ BackgroundImage } />
          <div className="passion-next-button">
            <p className="passion-link-sub-title">...</p>
            <p className={ classes.root }>
                <Button variant="outlined" onClick={() => {
                    props.history.push('strength')
                }}>Strength</Button>
            </p>
          </div>
        </div>
    );
};

export default Passion;