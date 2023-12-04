import AppHead from './app-head-firsst-page/app-head'
import BodyInfo from './body-info/body-info'
import MenuItems from './menu-items/menu-items'
import AppFutter from '../app-futter/app-futter'

const FirstPage = ({changeActivePage}) => {
    const OnchangePage = (name) => {
        changeActivePage(name)
    }
    return (
        <div className="firstPage">
            <AppHead OnchangePage={OnchangePage}/>
            <BodyInfo/>
            <MenuItems/>
            <AppFutter OnchangePage={OnchangePage}/>
        </div>
    )
}

export default FirstPage