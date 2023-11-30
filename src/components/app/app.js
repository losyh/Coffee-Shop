import { Component } from 'react'
import FirstPage from '../firstPage/firstPage'
import OurCofee from '../ourCoffee/OurCoffee'
import'./app.css'


class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            activePage: 'first'
        }
    }
    






    render() {
        let state
        if (this.state.activePage === 'first') {
            state = <FirstPage/>
        } else if (this.state.activePage === 'our') {
            state = <OurCofee/>
        }
        return (
        <div className="app">
            {state}
        </div>
        )
    }
}

export default App