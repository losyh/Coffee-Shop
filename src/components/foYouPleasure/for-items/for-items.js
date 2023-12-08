
import coffe from '../../../img/items/coffe-item.png'


const ForYouPleasureItem = () => {
       const items = [
            {img: coffe, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$'},
            {img: coffe, name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: '6.99$'},
            {img: coffe, name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99$'},
            {img: coffe, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$'},
            {img: coffe, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$'},
            {img: coffe, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$'},
        ]


    const elem = items.map(res => {
        return (
            <div className="coffe-item col-4">
                <img className='img-item-our' src={res.img} alt="coofe-item" />
                <h3 className='mt-2'>{res.name}</h3>
                <h3 className='country'>{res.country}</h3>
                <h3 className='price'>{res.price}</h3>
            </div>
        )
    })
    
    return (
        <div className="container mb-3">
            <div className="d-flex flex-row mb-1 justify-content-center">
                <div className="row justify-content-center ">
                    {elem}
                </div>
            </div>
        </div>
    )
}

export default ForYouPleasureItem