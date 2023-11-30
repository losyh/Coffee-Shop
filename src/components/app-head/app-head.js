import '../app-head/app-head.css'
import beans from '../../icons/c1.png'
import beans2 from '../../icons/с2_white.svg'

const AppHead = () => {
    return (
        <div className="head">
            <div className="containerr">
                <img className='coffe' src={beans} alt="coffe-beans" />
                <div className="navv">
                    <span className="navigation">Coffee house</span>
                    <span className="navigation">Our coffee</span>
                    <span className="navigation">For your pleasure</span>
                </div>
                <h1>Everything You Love About Coffee</h1>
                <img className='coffe-beans' src={beans2} alt="coffe-beans" />
                <h2 className='heads-item'>We makes every day full of energy and taste</h2>
                <h2 className='try'>Want to try our beans?</h2>
                <button className="more">More</button>
            </div>

        </div>
    )
}

export default AppHead