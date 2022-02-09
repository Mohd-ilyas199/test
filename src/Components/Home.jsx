import React from 'react';
import {Nav,Navbar,Container,Card,Button} from "react-bootstrap"
import "./home.css";


// try using primereact


const Home = () => {
    return (
        <div className="div">
             <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Village</Nav.Link>
      <Nav.Link href="#features">Clans</Nav.Link>
      <Nav.Link href="#pricing">Tailed Beasts</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
            <div className='parent'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam tempore odit commodi error incidunt quisquam rem nulla perferendis inventore a, sint excepturi minus. Mollitia assumenda, commodi necessitatibus nostrum ut eaque porro quia laudantium libero natus provident architecto repellat eius culpa. Error nobis facilis numquam vero eaque quaerat iste, similique at veritatis? Deleniti quidem accusamus fuga voluptates, nesciunt aperiam veritatis sequi commodi nobis excepturi, est quas eaque in natus corrupti itaque reiciendis ipsa hic amet enim laboriosam, consequatur quos! Eligendi labore amet ab beatae eius corporis id laboriosam, repellendus alias sit officiis sequi cum commodi adipisci architecto ducimus similique voluptate!</p>
                <img className='img' src='naruto.jpg'></img>
            </div>
            <div className='div1'>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="profile1.png" />
  <Card.Body style={{backgroundColor:"lightgray"}}>
    <Card.Title>Naruto Uzumaki</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="dark">Skills: 9/10 </Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="profile3.jfif" />
  <Card.Body style={{backgroundColor:"lightgray"}}>
    <Card.Title>itachi uchiha</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="dark">Skills: ∞/∞ </Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="profile1.png" />
  <Card.Body style={{backgroundColor:"lightgray"}}>
    <Card.Title>Naruto Uzumaki</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="dark">Skills: 9/10 </Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="profile3.jfif" />
  <Card.Body style={{backgroundColor:"lightgray"}}>
    <Card.Title>itachi uchiha</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="dark">Skills: ∞/∞ </Button>
  </Card.Body>
</Card> 
            </div>
            <br />
            <div className='div3'>
            <div className='div2'>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit Illum, perferendis? Temporibus alias eligendi aperiam consequuntur.</p>
                <img className='img2' src='profile1.png'></img>
            </div>
            <div className='div2'>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit Illum, perferendis? Temporibus alias eligendi aperiam consequuntur.</p>
                <img className='img2' src='profile3.jfif'></img>
            </div>
            </div>
        </div>
    );
};

export default Home;