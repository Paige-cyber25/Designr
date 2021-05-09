import React, {useState} from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import SignInModal from '../components/SignInModal';
import '../App.css';
import clsx from 'clsx';

function TopNavbar({activeC}) {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            
           <Navbar collapseOnSelect expand="lg" className="navbar" >
                <Navbar.Brand href="/" className="ml-5"><img src="/designr-logo.png" alt="" className="designr-logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto nav-links text-center">
                <Nav.Link href="/resources" className={clsx("mr-4 nav-item1", activeC === "/resources" ? 'active' : 'red')}>Resources</Nav.Link>
                <Nav.Link href="/about" className="mr-4 nav-item2">About</Nav.Link>
                <Nav.Link href="/jobBoard" className="mr-3 nav-item3"><span>Job Board</span></Nav.Link>
                <Nav.Link href="/slackCommunity" className="nav-item4">Slack Community</Nav.Link>
                </Nav>
                <Nav className="nav-right-links text-center">
                <Nav.Link href="#signIn" className={clsx("ml-lg-3 pl-lg-3 nav-right-item1", activeC === '/signIn' ? 'active' : '')}
                onClick={()=>setModalShow(true)}>Sign In</Nav.Link>
                    <Button className="mr-lg-5 ml-lg-3 nav-right-item2">Get Started</Button>
                </Nav>
            </Navbar.Collapse>
            <SignInModal show={modalShow} onHide={() => setModalShow(false)}/>
        </Navbar>
        </div>
    )
}

export default TopNavbar;
