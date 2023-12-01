import { Component } from 'react'
import '../head-Our-coffe/head-Our-coffe.css'
import beans from '../../icons/c1.png'

class AppHeadOur extends Component {

    
    OnCoffeHouse = (activePage) => {
        this.setState(({activePage}) => ({
            activePage: 'our'
        }))
    }


    render()
{    return (
        <div className="Our-head">
            <div className="containerr">
                <img className='coffe-our' src={beans} alt="coffe-beans" />
                <div className="navv">
                    <span className="navigation-our" onClick={this.OnCoffeHouse}>Coffee house</span>
                    <span className="navigation-our">Our coffee</span>
                    <span className="navigation-our">For your pleasure</span>
                </div>
                <h1 className='h-our'>Our Coffee</h1>
            </div>

        </div>
    )}
}

export default AppHeadOur