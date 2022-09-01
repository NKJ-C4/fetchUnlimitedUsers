import React from "react";
import loaderImage from "../static/double-loader.svg"

const Loader = (props) => {
    return (
        <div className="tspinner">
            <img src={loaderImage} alt="loading..." className={props?.className}/>
        </div>
    )
}

export default Loader;