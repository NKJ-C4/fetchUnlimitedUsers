import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import React from "react";
import Dummy from "../static/dummy.png"

const EachUser = (props) => {
    return (
        <div className="member">
            <img className="team-dp" src={Dummy} alt="Dummy" />
            <h2 className="member-name">{props?.name}</h2>
            <h3 className="member-job-detail">{props.jobTitle}</h3>
            <h3 className="member-company-detail">{props.company}</h3>
            <div className="team-soc">
              <a href={"mailto:" + props?.email}>
                <MailOutlined size={30}/>
              </a>
              <a href={props.phone}>
                <PhoneOutlined size={30}/>
              </a>
            </div>
        </div>
    )
}

export default EachUser;