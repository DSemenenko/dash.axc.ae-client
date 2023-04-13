import AnnounceSingle from "./AnnounceSingle";
import AnnounceDouble from "./AnnounceDouble"
import '../Assets/style.css'
import Header from '../Components/Header'

const Base = ({props}) => {
    return <>
        {props.Agent_2 ? (
            <AnnounceDouble props={props}/>
            ) : (
            <AnnounceSingle props={props}/>
        )}
        
    </>
}

export default Base;