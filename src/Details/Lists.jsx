import { useEffect, useState } from "react";
const Lists = () => {
    const[data, setData] = useState();
    
    async function fetchlists() {
        const response = await fetch("https://dash.axc.ae/requests/get-lists");
        const jsonData = await response.json()

        const parseData = jsonData.map(item => JSON.parse(item.data))
        setData(parseData)
    }

    useEffect(() => {
        fetchlists()
    }, [])

    console.log(data)

    if(data === undefined){
        return(
            <>Loading...</>
        )
    }
    

    return (
        <div className="container-fluid">
            <div className="height-board align-items-center">
                <div className="card list-board">
                    <div className="row lists">
                        <div className="col-md-4">
                            <h3>New listing this month</h3>
                            <div>
                                <ul>
                                    {data[0].map((item) => (
                                        <li key={item.id} className="d-flex justify-content-between">
                                            <span>{item.title}</span>
                                            <span>{item.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h3>Total sales listings</h3>
                            <div>
                                <ul>
                                    {data[1].map((item) => (
                                        <li className="d-flex justify-content-between">
                                            <span>{item.title}</span>
                                            <span>{item.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h3>Total rental listings</h3>
                            <div>
                                <ul>
                                    {data[2].map((item) => (
                                        <li className="d-flex justify-content-between">
                                            <span>{item.title}</span>
                                            <span>{item.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lists;