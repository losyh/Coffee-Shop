import './menu-items.css'
import aro from '../../../img/items/aromistico.jpeg'
import pre from '../../../img/items/presto.jpeg'
import sol from '../../../img/items/solimo.jpeg'


const items = [
    {src: sol, name: 'Solimo Coffee Beans 2 kg', price: '10.73$'},
    {src: pre, name: 'Presto Coffee Beans 1 kg', price: '15.99$'},
    {src: aro, name: 'AROMISTICO Coffee 1 kg', price: '6.99$'}
]

const elem = items.map(item => {
    const {src, name, price} = item
    return (
        <div className="item-menu">
            <img src={src} alt="item-menu" className='img-item'/>
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    )
})

const MenuItems = () => {
    return (
        <div className="containerrr">
            <h2 className='our'>Our best</h2>
            <div className="menuItems">
            {elem}
            </div>
        </div>

    )
}

export default MenuItems