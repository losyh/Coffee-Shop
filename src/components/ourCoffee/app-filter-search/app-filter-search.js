import './app-filter-search.css'
import coffe from '../../../img/items/coffe-item.png'
import { useState } from 'react'

const AppFilter = () => {
    const [state, setState] = useState({
        items: [
            {img: coffe, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$'},
            {img: coffe, name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: '6.99$'},
            {img: coffe, name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99$'},
            {img: coffe, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$'},
            {img: coffe, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$'},
            {img: coffe, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$'},
        ]
    })

    const elem = state.items.map(res => {
        return (
            <div className="coffe-item col-4">
                <img className='img-item-our' src={res.img} alt="coofe-item" />
                <h3 className='mt-2'>{res.name}</h3>
                <h3 className='country'>{res.country}</h3>
                <h3 className='price'>{res.price}</h3>
            </div>
        )
    })



    const filterPost = (items, filter) => {
        switch(filter) {
            case 'Brazil':
                return items.filter(item => {
                    return item.country === 'Brazil'
                })
            case 'Kenya' :
                return items.filter(item => {
                    return item.country === 'Kenya'
                })
            case 'Columbia' :
                return items.filter(item => {
                    return item.country === 'Columbia'
                }) 
            default:
                return items
        }
    }

    const OnUpdateFilter = (filter) => {
        setState({
            ...state,
            items: filter
          })
    }
    
    return (
        <div className="container mb-3">
            <div className="d-flex flex-row mb-3 mt-5 justify-content-center">
                <p className="look p-2">Lookiing for</p>
                <input type="text" placeholder="start typing here..." className="p-2"/>
                <p className="look look-filter p-2">Or filter</p>
                <button className="brazil" onClick={() => OnUpdateFilter(filterPost(state.items, 'Brazil'))}>Brazil</button>
                <button className="kenya" onClick={() => OnUpdateFilter(filterPost(state.items, 'Kenya'))}>Kenya</button>
                <button className="columbia" onClick={() => OnUpdateFilter(filterPost(state.items, 'Columbia'))}>Columbia</button>
            </div>
            <div className="d-flex flex-row mb-1 justify-content-center">
                <div className="row justify-content-center ">
                    {elem}
                </div>
            </div>
        </div>
    )
}

export default AppFilter