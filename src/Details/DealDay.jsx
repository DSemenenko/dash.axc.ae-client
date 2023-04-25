import { useEffect, useState } from "react";

const DealDay = () => {
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

    return(
        <div className="container-fluid">
            <div className="height-board align-items-center">
                <div className="card list-board">
                    <div className="row lists h-100 dealday">
                        <div className="col-md-4">
                            <h3>More than 60 days</h3>
                            <div className="h-100 list-deal deal-1">
                                <ul>
                                    {data[3].map((item) => (
                                        <li key={item.id} className="d-flex justify-content-between">
                                            <span>{item.title}</span>
                                            <span>{item.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h3>More than 35 days</h3>
                            <div className="h-100 list-deal deal-2">
                                <ul>
                                    {data[4].map((item) => (
                                        <li key={item.id} className="d-flex justify-content-between">
                                            <span>{item.title}</span>
                                            <span>{item.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h3>More than 25 days</h3>
                            <div className="h-100 list-deal deal-3">
                                <ul>
                                    {data[5].map((item) => (
                                        <li key={item.id} className="d-flex justify-content-between">
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
    )
}

export default DealDay;