import AppFutter from "../app-futter/app-futter"
import AppHeadOur from "./head-Our-coffe/head-Our-coffe"
import OurInfo from "./Our-info/Our-info"
import AppFilter from "./app-filter-search/app-filter-search"

const OurCofee = ({changeActivePage}) => {
    const OnchangePage = (name) => {
        changeActivePage(name)
    }
    return (
        <div className="our-coffe">
            <AppHeadOur OnchangePage={OnchangePage}/>
            <OurInfo/>
            <AppFilter/>
            <AppFutter OnchangePage={OnchangePage}/>
        </div>
    )
}

export default OurCofee