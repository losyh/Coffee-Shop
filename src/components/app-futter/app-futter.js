import '../app-futter/app-futter.css'
import beans from '../../icons/beans black futter.png'
import beans1 from '../../icons/c2-black (2).png'

const AppFutter = ({OnchangePage}) => {

    const OurChangePage = () => {
        OnchangePage('our')
    }
    const FirstChangePage = () => {
        OnchangePage('first')
    }
    const ForChangePage = () => {
        OnchangePage('for')
    }

    return (
        <div className="cont">
            <div className="app-futter">
            <img src={beans} alt="coffe-beans-futter" className='img1' />
                <div className="nav">
                    <span className="Coffee house" onClick={FirstChangePage}>Coffee house</span>
                    <span className="Our coffee" onClick={OurChangePage}>Our coffee</span>
                    <span className="For your pleasure" onClick={ForChangePage}>For your pleasure</span>
                </div>
                <img src={beans1} alt="coffe-beans" className='img2' />
            </div>
        </div>
    )
}

export default AppFutter