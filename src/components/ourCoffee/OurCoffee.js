import AppFutter from "../app-futter/app-futter"
import AppHeadOur from "./head-Our-coffe/head-Our-coffe"
import OurInfo from "./Our-info/Our-info"

const OurCofee = ({changeActivePage}) => {
    const OnchangePage = (name) => {
        changeActivePage(name)
    }
    return (
        <div className="our-coffe">
            <AppHeadOur OnchangePage={OnchangePage}/>
            <OurInfo/>
            <AppFutter OnchangePage={OnchangePage}/>
        </div>
    )
}

export default OurCofee