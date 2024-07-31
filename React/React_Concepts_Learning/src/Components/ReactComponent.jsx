import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


function ReactComponent(){
    return(
        <>
        <h1>Hello</h1>
        <Button variant="primary" className='text-warning'>Primary</Button>{' '}
        <Button variant="outline-info">Info</Button>{' '}
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

 
    <Container>
      <Row>
        <Col xs={4} md={3}>
          <Image src="https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@.V1_FMjpg_UX1000.jpg" style={{height:"100px",width:"100px"}} rounded />
        </Col>
        <Col xs={4} md={3}>
          <Image src="https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@.V1_FMjpg_UX1000.jpg" style={{height:"100px",width:"100px"}} roundedCircle />
        </Col>
        <Col xs={4} md={3}>
          <Image src="https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@.V1_FMjpg_UX1000.jpg" style={{height:"100px",width:"100px"}} thumbnail />
        </Col>
      </Row>
    </Container>

        </>
    )
}
export default ReactComponent