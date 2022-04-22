import React                    from 'react';
import { makeStyles }           from '@material-ui/core/styles';
import Button                   from '@material-ui/core/Button';
import DirectionsBikeIcon       from '@material-ui/icons/DirectionsBike';
import ColorLensIcon            from '@material-ui/icons/ColorLens';
import FitnessCenterRoundedIcon from '@material-ui/icons/FitnessCenterRounded';
import Header                   from '../Header/Header';
import Image1                   from '../../images/pexels-ave-calvar-martinez-4705134.jpeg';
import Image2                   from '../../images/pexels-ave-calvar-martinez-4705134-2.jpeg';
import Image3                   from '../../images/pexels-ave-calvar-martinez-4705134-3.jpeg';
import                               './Strength.css';
import                               './Strength.res.css';

const useStyles = makeStyles(() => ({
    root: {
        alignItems : 'center',
        color      : 'cyan',
        position   : 'absolute',
        width      : 200,
        marginTop  : 55,
        marginleft : 'auto',
        marginRight: 'auto',
    },
    button: {
        '& > *': {
            color       : 'cyan',
            borderColor : 'cyan',
            marginTop   : 80,
            marginBottom: 80,
            right       : 'auto',
            left        : 'auto',
            width       : 100,
            marginRight : 'auto'

        }
    },
}));

const Popup = (props) => {
    return (
        <div className='popup' onClick={props.closePopup}>
            <img className="popup_img" src={ props.img } />
        </div>
    );
};

const Strength = (props) => {
    const classes = useStyles();

    return (
        <div className="Strength">
            <Header COLOR='cyan' />  
            <h1 className="strength-title">Strength</h1>
            <div className="strength-sec-list">
                <div className="strength-list">
                    <div className="strength-list-ttl-area">
                        <span className={ classes.root }>
                            <DirectionsBikeIcon style={{ fontSize: 120 }} />
                        </span>
                        <img src={ Image1 } className="strength-list-ttl-img"/>
                        <p className="strength-list-ttl-jpn">自走力</p>
                        <p className="strength-list-ttl-eng">Self-management</p>
                    </div>
                    <div className="strength-sec-lead-area">
                        <p>何もない状態から何かを達成するためには、 
                            まず目標の仮説を立て、膨大な情報収集を行います。 
                            何かの問題を改善する時には、できるだけ細かく分割して、
                            どこにコア部分があるかを突き止めます。 
                            これにより現在地と目的地とのギャップが明確化でき、 
                            ここから達成に向けて効率のいいやり方を探します。 
                            独学がいいのか、誰かに教わった方がいいのか。 
                            計画が決まれば後は行動あるのみです。やるか、やるか、やるか。
                        </p>
                    </div>
                </div>
                <div className="strength-list">
                    <div className="strength-list-ttl-area">
                        <span className={ classes.root }>
                            <ColorLensIcon style={{ fontSize: 120 }} />
                        </span>
                        <img src={ Image2 } className="strength-list-ttl-img"/>
                        <p className="strength-list-ttl-jpn">デザイン力</p>
                        <p className="strength-list-ttl-eng">Design</p>
                    </div>
                    <div className="strength-sec-lead-area">
                        <p>美大の大学受験のために、1年の浪人を含み2年間画塾に通っていました。
                            デッサン、色彩構成、立体作品を合計100点以上作り、本番こそ上手くいきませんでしたが、
                            50名以上を抱える画塾の中で、パンフレットの表紙を飾っていただいていました。
                            基本的な補色効果や明度・彩度効果などを理解していますし、
                            どう表現したら鑑賞側がどう感じるか、という問いを悩み抜き、考え続けた経験があります。
                        </p>
                    </div>
                </div>
                <div className="strength-list">
                    <div className="strength-list-ttl-area">
                        <span className={ classes.root }>
                            <FitnessCenterRoundedIcon style={{ fontSize: 120 }} />
                        </span>
                        <img src={ Image3 } className="strength-list-ttl-img"/>
                        <p className="strength-list-ttl-jpn">根気強さ</p>
                        <p className="strength-list-ttl-eng">Perseverance</p>
                    </div>
                    <div className="strength-sec-lead-area">
                        <p>高校の３年間は合気道部に所属し、主将兼部長を務めていました。
                            比較的激しい部活だったため、足の靭帯を損傷し、松葉杖をついていた時期もありましたが、
                            ３年間やり通して、有段者資格と黒帯をいただきました。
                            一度やり始めると、最後までやり切らないと納得ができません。
                            ここで培った忍耐力や根気強さは自信がありますし、プログラミングに限らずともあらゆる面で活きていると思います。
                        </p>
                    </div>
                </div>
            </div>
            <span className="strength-button">
                <div className={ classes.button }>
                    <Button variant="outlined" onClick={() => {
                        props.history.push('contact')
                    }}>Contact</Button>
                </div>
            </span>
        </div>
    );
};

export default Strength;