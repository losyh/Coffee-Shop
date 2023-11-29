import '../menu-items/menu-items.css'


const items = [
    {src: '../img/solimo.jpg', name: 'Solimo Coffee Beans 2 kg', price: '10.73$'},
    {src: '../img/presto.jpg', name: 'Presto Coffee Beans 1 kg', price: '15.99$'},
    {src: '../img/aromistico.jpg', name: 'AROMISTICO Coffee 1 kg', price: '6.99$'}
]

const elem = items.map(item => {
    const {src, name, price} = item
    return (
        <div className="item-menu">
            <img src={src} alt="item-menu" />
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    )
})

const MenuItems = () => {
    return (
        <div className="container">
            <h2>Our best</h2>
            <div className="menuItems">
            {elem}
            </div>
        </div>

    )
}

export default MenuItems