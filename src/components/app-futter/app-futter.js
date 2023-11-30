import '../app-futter/app-futter.css'
import beans from '../../icons/coffee-beans.jpg'
import beans1 from '../../icons/coffee-beans (1).jpg'

const AppFutter = () => {
    return (
        <div className="cont">
            <div className="app-futter">
            <img src={beans} alt="coffe-beans" className='img1' />
                <div className="nav">
                    <span className="Coffee house">Coffee house</span>
                    <span className="Our coffee">Our coffee</span>
                    <span className="For your pleasure">For your pleasure</span>
                </div>
                <img src={beans1} alt="coffe-beans" className='img2' />
            </div>
        </div>
    )
}

export default AppFutter