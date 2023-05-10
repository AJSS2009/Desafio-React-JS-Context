import React, { useEffect, useState, useContext } from 'react'; 
import './favorito.css'; 
import Context from '../../context'; 
import { Container, Row, Col, Card, Button } from 'react-bootstrap'; 

export default () => {

    const [data, setData] = useState([]);  
    const { characters, setCharacters } = useContext(Context);  

    useEffect(() => {
        setData(characters.filter(val => val.favorito === true));  
    }, []); 
    return (
        <div className='favorito-class'> {}
            <Container> 
                <Row className='align-items-center'> {}
                    {data ? data.map(character => 
                        <Col lg={4} md={12} className='my-4'> 
                            <Card className='card-1'>
                                <Card.Img variant='top' src={character.image} />
                                <Card.Body> 
                                    <Card.Title><big>{character.name}</big></Card.Title> 
                                    <Card.Text> 
                                        <p><strong>Tipo:</strong> {character.species}</p> 
                                        <p><strong>Condición:</strong> {character.status}</p> 
                                        <p><strong>Genero:</strong>  {character.gender}</p> 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ) : <p>Cargando...</p>} {}
                </Row>
            </Container>
        </div> 
    );
}
