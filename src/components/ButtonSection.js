import React from "react";
import Loader from "./Loader";

const ButtonSection = props => {
    return (
        <div className="btn-section">
            <button className="btn-default prev-btn" onClick={() => props?.handleMe("prev")} disabled={props?.numberOfUsers > 0 ? false : true}>{ props?.loader ? <Loader /> : "PREVIOUS" }</button>
            <button className="btn-default next-btn" onClick={() => props?.handleMe("next")}>{ props?.loader ? <Loader /> : "NEXT" }</button>
        </div>
    )
}

export default ButtonSection;