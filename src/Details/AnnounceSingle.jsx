import React, {useEffect, useState} from "react";
const numeral = require('numeral');

const AnnounceSingle = ({props}) => {
    //console.log("single", props.props)


    //props = props.props
    
    var Amount = numeral(props.Amount).format('0,0.0000')
    Amount = Amount.substring(0, Amount.length-5);

    return <>
        <div className="announcesingle">
            <div className="container-fluid">
            {/* grid-custom */}
                <div className="row"> 
                    <div className="col-md-6 offset-md-1">
                        <div className="h-100 d-flex align-items-center">
                            <div className="context">
                                <p className="upper">Agent and Deal Type:</p>
                                <h3>{props.Agent}</h3>
                                <p className="sub-title deal-type">{props.DealType}</p>
                                <hr />
                                <p className="upper">Developer, Project and Amount:</p>
                                <h3>{props.Developer} - {props.Project}</h3>
                                <p className="sub-title price">AED {Amount}</p>
                                <hr />
                                <p className="upper">Congratulations</p>
                                <p className="sub-title">{props.Content}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="banner">
                            <div className="img" 
                                style={{
                                    backgroundImage: `url(${props.agent1_img})`
                            }}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default AnnounceSingle;