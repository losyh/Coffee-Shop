import { Component } from 'react'
import FirstPage from '../firstPage/firstPage'
import OurCofee from '../ourCoffee/OurCoffee'
import'./app.css'


class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            activePage: 'our'
        }
    }
    
    OnCoffeHouse = (activePage) => {
        this.setState(({activePage}) => ({
            activePage: 'our'
        }))
    }





    render() {
        let state
        if (this.state.activePage === 'first') {
            state = <FirstPage OnCoffeHouse={this.OnCoffeHouse}/>
        } else if (this.state.activePage === 'our') {
            state = <OurCofee OnCoffeHouse={this.OnCoffeHouse}/>
        }
        return (
        <div className="app">
            {state}
        </div>
        )
    }
}

export default App