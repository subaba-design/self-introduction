import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="About">
            <h1 className="about-title">About</h1>
            <div className="about-background-element">
                <div className="about-element">
                    <h2>深居 昌哉</h2>
                    <h3>Masaya Fukai</h3>
                    <p>
                        大阪府生まれ。9歳から４年間は沖縄で育つ。
                        大阪の高等学校卒業後、浪人受験をするも失敗。
                        実家から自立するために上京。
                        2020年12月にプログラミングの世界を知る。
                    </p>
                    <div className="about-image">IMAGE<br/>IMAGE<br/>IMAGE<br/>IMAGE<br/>IMAGE</div>
                    <h1 className="about-link-to-person"><span>(more)</span>Person→</h1>
                </div>
            </div>
        </div>
    );
}

export default About;