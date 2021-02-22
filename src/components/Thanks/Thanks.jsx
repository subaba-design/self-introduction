import React           from "react";
import BackgroundImage from "../../images/minimalist-evening-sea-horizon-picjumbo-com.jpg";
import                      "./Thanks.css";

const Thanks = () => {
    return (
        <div className="Thanks">
            <div className="thanks-content">
                <img src={ BackgroundImage } />
                <h1>Thank you for watching!!</h1>
            </div>
        </div>
    );
}

export default Thanks;