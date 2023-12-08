import AppHeadFor from "./head/AppHeadFor"
import ForYouPleasureItem from "./for-items/for-items"
import AppFutter from "../app-futter/app-futter"
import ForBody from "./for-body/for-body"

const ForYouPleasure = ({changeActivePage}) => {
    const OnchangePage = (name) => {
        changeActivePage(name)
    }
    return (
        <div className="for-you-pleasure">
            <AppHeadFor OnchangePage={OnchangePage}/>
            <ForBody/>
            <ForYouPleasureItem/>
            <AppFutter OnchangePage={OnchangePage}/>
        </div>
    )
}

export default ForYouPleasure