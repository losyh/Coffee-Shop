import AppHead from '../app-head/app-head'
import BodyInfo from '../body-info/body-info'
import MenuItems from '../menu-items/menu-items'
import AppFutter from '../app-futter/app-futter'

const FirstPage = () => {
    return (
        <div className="firstPage">
            <AppHead/>
            <BodyInfo/>
            <MenuItems/>
            <AppFutter/>
        </div>
    )
}

export default FirstPage