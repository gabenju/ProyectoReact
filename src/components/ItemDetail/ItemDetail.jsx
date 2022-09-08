import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({Product}) => {
    const {stock}= Product;
        
    const onAdd = () => {
        console.log('compraste')
    }
    return (
        <div className="productContainer">
            <div className="row">
        <div key={Product.id} className='card'>
                    <div className="card-header">
                        {Product.name}
                    </div>
                    <div className ="card-img-top">
                    <img src={Product.img} alt="logo"/>
                    </div>
                    <div className ="list-group-item">
                        {Product.description}
                    </div>                   
                    <div className="card-footer">
                        {`precio ${Product.price}`}
                    </div>
                    <div className="card-footer">
                        {`Stock: ${Product.stock}`}
                    </div>
                    <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
                    <Nav.Link href={`/description/${Product.id}`}>
                    <button className="btn btn-outline-warning btn-block">Detalles</button>
                    </Nav.Link>
                  
                </div>
                </div>

            </div>
    )
}

export default ItemDetail