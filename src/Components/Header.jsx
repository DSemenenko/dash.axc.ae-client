import { Link } from "react-router-dom"
import Logoblock from "./Logo"
import Date from './Date'

const Header = () => {
    return <>
        <header>
            <div className="d-flex justify-content-between align-items-center">
                <Logoblock/>
                <Date/>
            </div>
        </header>
        </>
}
export default Header