import '../app-head/app-head.css'

const AppHead = () => {
    return (
        <div className="head">
            <img className='coffe' src="../../icons/coffe-beans.svg" alt="coffe-beans" />
            <button className="navigation">Coffee house</button>
            <button className="navigation">Our coffee</button>
            <button className="navigation">For your pleasure</button>
            <h1>Everything You Love About Coffee</h1>
            <img className='coffe-beans' src="../../icons/coffe-beans1.svg" alt="coffe-beans" />
            <h2>We makes every day full of energy and taste</h2>
            <p>Want to try our beans?</p>
            <button className="more">More</button>

        </div>
    )
}

export default AppHead