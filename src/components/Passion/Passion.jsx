import React from "react";
import "./Passion.css";
import Background from "../../images/red-yellow-and-green-colorful-chilli-peppers-picjumbo-com.jpg";
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     '& > *': {
//       margin: theme.spacing(4),
//       width: theme.spacing(20),
//       height: theme.spacing(20),
//       textAlign: 'right'
//     },
//   },
// }));

const Passion = () => {
    // const classes = useStyles();

    return (
        <div className="Passion">
            <h1 className="passion-title">PASSION</h1>
            <p className="passion-text">
            プログラミングの創造力を知った時、僕は衝撃的な魅力を感じました。
            僕は物心ついたときから、何かを作るのが好きでした。
            それは工作などの有形のものはもちろんのこと、何かの計画を立てたりといった無形のものまで、
            一度作り出すと夢中になってしまいます。
            一度芸術大学を志望して挫折してしまいましたが、２年間絵というクリエイティブと戦い続けた経験と、
            新しく知ったプログラミングという世界への情熱を、貴社に貢献という形でぶつけたいと思っています。
            </p>
            <div className="passion-image-1">
                <img className="passion-background" src={ Background } />
            </div>
        </div>
    );
}

export default Passion;