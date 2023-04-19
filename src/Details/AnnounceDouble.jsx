import Logoblock from "../Components/Logo";
const numeral = require('numeral');
const AnnounceDouble = (data) => {
    
    data = data.props
    var Amount = numeral(data.Amount).format('0,0.0000')
    Amount = Amount.substring(0, Amount.length-5);
    
    return <>
        <div className="announcesingle">
            <div className="container-fluid">
                <div className="row" style={{height: "100vh"}}>
                    <div className="col-md-4">
                        <div className="banner">
                            <div>
                                <div className="img" 
                                    style={{
                                        backgroundImage: `url(${data.agent1_img})`
                                }}/>
                                <div className="context text-center mt-2">
                                    <h3>{data.Agent}</h3>
                                </div>
                            </div>
                            {/* <img src="" alt="" /> */}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="h-100 d-flex align-items-center">
                            <div className="context text-center">
                                <p className="upper">Deal Type:</p>
                                {/* <h3>David Semenenko</h3> */}
                                <p className="sub-title deal-type">{data.DealType}</p>
                                <hr />
                                <p className="upper">Developer, Project and Amount:</p>
                                <h3>{data.Developer} {data.Project}</h3>
                                <p className="sub-title price">AED {Amount}</p>
                                <hr />
                                <p className="upper">Congratulations</p>
                                <p className="sub-title">{data.Content}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="banner">
                            <div>
                                <div className="img" 
                                    style={{
                                        backgroundImage: `url(${data.agent2_img})`
                                }}/>
                                <div className="context text-center mt-2">
                                        <h3>{data.Agent_2}</h3>
                                </div>
                            </div>
                            {/* <img src="" alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default AnnounceDouble;