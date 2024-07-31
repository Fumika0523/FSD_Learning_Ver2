
import React from 'react';
import Card from 'react-bootstrap/Card';


function BlogCart({title,author,content,photo}){


    return(
        <>
    <div style={{display:"flex",justifyContent:"center",marginTop:"3%"}}>
    <Card style={{display:"flex",flexDirection:"row",width:"80%"}}>
      <Card.Img variant="top" src={photo} style={{width:"300px"}}/>
      <Card.Body>
        <div className='d-flex'>
        <Card.Title className='align-self-center fs-3'>{title}</Card.Title>


    
        </div>
        <Card.Text className="mt-2">
        {content}
        </Card.Text>
        <Card.Link href="#">Read More...</Card.Link>
        <Card.Text className="mt-2">{author}
        </Card.Text>
      
      </Card.Body>
    </Card>
    </div> 
        </>
    )
}
export default BlogCart
