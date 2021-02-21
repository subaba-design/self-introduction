import React from "react";
import "./Thanks.css";
import Background from "../../images/minimalist-evening-sea-horizon-picjumbo-com.jpg";

const Thanks = () => {
    return (
        <div className="Thanks">
            <div className="thanks-image">
                <img src={ Background } alt=""/>
                <h1 className="thanks-message">Thank you for watching!!</h1>
            </div>
        </div>
    );
}

export default Thanks;