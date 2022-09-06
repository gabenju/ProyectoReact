import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({Product}) => {
    const {stock}= Product
        
    const onAdd = () => {
        console.log('compraste')
    }
    return (
        <div className="container">
            <div className="row">
        <div key={Product.id} className='card w-50 mt-2'>
                    <div className="card-header">
                        {Product.name}
                    </div>
                    <div className ="card-img-top">
                    <img src={Product.img} alt="logo"/>
                    </div>
                    <div className ="list-group-item">
                        {Product.detail}
                    </div>                   
                    <div className="card-footer">
                        {`precio ${Product.price}`}
                    </div>
                    <div className="card-footer">
                        {`Stock: ${Product.stock}`}
                    </div>
                    <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
                    <Nav.Link href={`/item/${Product.id}`}>
                    <button className="btn btn-outline-warning btn-block">Detalles</button>
                    </Nav.Link>
                  
                </div>
                </div>

            </div>
    )
}

export default ItemDetail

/*
        const ItemDetail = ({Product}) => {
    const {stock}= Product
        
    const onAdd = () => {
        console.log('compraste')
    }
    return (
        <div className="container">
            <div className="row">
        <div key={Product.id} className='card w-50 mt-2'>
                    <div className="card-header">
                        {Product.name}
                    </div>
                    <div className ="card-img-top">
                    <img src={Product.img} alt="logo"/>
                    </div>
                    <div className ="list-group-item">
                        {Product.detail}
                    </div>                   
                    <div className="card-footer">
                        {`precio ${Product.precio}`}
                    </div>
                    <div className="card-footer">
                        {`Stock: ${Product.stock}`}
                    </div>
                    <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
                    <Nav.Link href={`/item/${Product.id}`}>
                    <button className="btn btn-outline-warning btn-block">Detalles</button>
                    </Nav.Link>
                  
                </div>
                </div>

            </div>
    )
}

export default ItemDetail
            */