import React, {useState} from 'react'
import FirstPage from '../firstPage/firstPage'
import OurCofee from '../ourCoffee/OurCoffee'
import'./app.css'


const App = (props) => {
        const [state, setState] = useState({
            activePage: 'first'
        })

        const changeActivePage = (name) => {
            setState({
              ...state,
              activePage: name
            })
          }

        let page
        if (state.activePage === 'first') {
            page = <FirstPage changeActivePage={changeActivePage}/>
        } else if (state.activePage === 'our') {
            page = <OurCofee changeActivePage={changeActivePage}/>
        }
        return (
        <div className="app">
            {page}
        </div>
        )
    }


export default App