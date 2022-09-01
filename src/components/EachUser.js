import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import Dummy from "../static/dummy.png"

const EachUser = (props) => {

    const [copied, setCopied] = useState(false);

    const copyToClipBoard = (value, type) => {
        
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(value);

        //Show that the text is copied
        setCopied(true);
    }

    const outFunc = (type) => {
        setCopied(false);
    }
    return (
        <div className="member">
            <img className="team-dp" src={Dummy} alt="Dummy" />
            <h2 className="member-name">{props?.name}</h2>
            <h3 className="member-job-detail">{props.jobTitle}</h3>
            <h3 className="member-company-detail">{props.company}</h3>
            <div className="team-soc">
            <div className="profile-icons emailIcon" onClick={(val) => copyToClipBoard(props?.email, "email")} onMouseOut={(type) => outFunc(type)}>
                <span className="tooltiptext" id={`myTooltip_email${props.key}`}>{copied ? 'Copied' : 'Copy Email to clipboard'}</span>
                <MailOutlined size={30} />
            </div>
            <div className="profile-icons phoneIcon" onClick={(val) => copyToClipBoard(props?.phone, "phone")} onMouseOut={(type) => outFunc(type)}>
                <span className="tooltiptext" id={`myTooltip_phone${props.key}`}>{copied ? 'Copied' : 'Copy Phone to clipboard'}</span>
                <PhoneOutlined />
            </div>
            </div>
        </div>
    )
}

export default EachUser;