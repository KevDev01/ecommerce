import "./Item.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Item = ({ element }) => {
    return (
        <div className="card-styles">
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={element.img} alt="" />
                <Card.Body>
                    <Card.Title className="title">{element.name}</Card.Title>
                    <Card.Text className="text">
                        ${element.price}
                    </Card.Text>
                    <Link to={`/itemDetail/${element.id}`}>
                    <Button variant="outline-secondary">Ver detalle</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item