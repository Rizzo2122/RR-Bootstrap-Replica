import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

export default function TopBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg" >
                <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
                    <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F39%2FInstacart_carrot.svg%2F1200px-Instacart_carrot.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FInstacart&tbnid=zUodPKn-YTwZtM&vet=12ahUKEwjw17DdlZn9AhWhNEQIHZhGABwQMygEegUIARDkAQ..i&docid=AZ9f0_Fyqs8E8M&w=1200&h=1371&q=instacart%20logo&ved=2ahUKEwjw17DdlZn9AhWhNEQIHZhGABwQMygEegUIARDkAQ" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#LogIn">Log In</Nav.Link>
                        <Button variant="success">Sign Up</Button>{' '}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}