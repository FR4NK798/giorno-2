import Card from "react-bootstrap/Card"
import items from "../data/books/fantasy.json"
import Col from "react-bootstrap/Col"
// import Stack from "react-bootstrap/Stack"

import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"

const AllMyBooks=()=>{
    return(
        <Container fluid>
        <Row>{
            items.map((book) => {
               return(
                // <Stack gap={3}>
                    <Col className="px-0 mb-5 flex-grow-0 justify-content-around">
                    <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={book.img} className="object-fit-cover"style={{ height: '25rem' }}/>
                        <Card.Body style={{height: "17em"}}>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Text>
                            {book.category}
                            </Card.Text>
                            <Card.Text>
                            {book.price}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                     </Col>
                 
               )
                                
            })
            
         } </Row>  
         </Container>   
    )
}

export default AllMyBooks