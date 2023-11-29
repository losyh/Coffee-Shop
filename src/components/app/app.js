import { Component } from 'react'
import FirstPage from '../firstPage/firstPage'
import'./app.css'

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }
    






    render() {
        const first = <FirstPage/>
        return (
        <div className="app">
            <FirstPage/>
        </div>
        )
    }
}

export default App