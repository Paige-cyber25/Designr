import React, {useState} from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import SignInModal from '../components/SignInModal';
import Badge from '@material-ui/core/Badge';
import '../App.css';
import clsx from 'clsx';

function TopNavbar({activeC}) {
    const [modalShow, setModalShow] = useState(false);
    const location = useLocation();
    return (
        <div>
            
           <Navbar collapseOnSelect expand="lg" className="navbar" >
                <Navbar.Brand href="/" className="ml-5"><img src="/designr-logo.png" alt="" className="designr-logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto nav-links text-center">
                <Nav.Link href="/resources" className={clsx("mr-4 nav-item1", activeC === "/resources" ? 'active' : 'red')}>Resources</Nav.Link>
                <Nav.Link href="/about" className={clsx("mr-4 nav-item2", activeC === "/about" ? 'active' : '' )}>About</Nav.Link>
                <Nav.Link href="/jobBoard" className={clsx("mr-3 nav-item3", activeC === "/jobBoard" ? 'active' : '')}><span>Job Board</span></Nav.Link>
                <Nav.Link href="/slackCommunity" className={clsx("nav-item4", activeC === "/slackCommunity" ? 'active' : '')}>Slack Community</Nav.Link>
                </Nav>
                {location.pathname === '/about' || location.pathname === '/jobBoard' || location.pathname === '/slackCommunity' ? (
                        <div className="nav-right-links text-center">
                             <img src="/navbarAvatar.png" alt="" className="navbarAvatar" />
                             <Badge badgeContent={3} className="navbarBadge" ></Badge>
                        </div>)  :
                (
                    <Nav className="nav-right-links text-center">
                <Nav.Link href="#signIn" className={clsx("ml-lg-3 pl-lg-3 nav-right-item1", activeC === '/signIn' ? 'active' : '')}
                onClick={()=>setModalShow(true)}>Sign In</Nav.Link>
                    <Button className="mr-lg-5 ml-lg-3 nav-right-item2">Get Started</Button>
                </Nav>
                )}
                
            </Navbar.Collapse>
            <SignInModal show={modalShow} onHide={() => setModalShow(false)}/>
        </Navbar>
        </div>
    )
}

export default TopNavbar;
