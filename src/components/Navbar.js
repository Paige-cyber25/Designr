import React, {useState,useEffect} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useLocation, Link, useHistory } from 'react-router-dom';
import SignInModal from '../components/SignInModal';
import { Typography, Avatar, Button } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import '../App.css';
import clsx from 'clsx';
import useStyles from './styles';
import {useDispatch} from 'react-redux';

function TopNavbar({activeC}) {
    const classes = useStyles();
    const [modalShow, setModalShow] = useState(false);
    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
   
    const logout = () => {
        dispatch({type:'LOGOUT'});

        history.push('/');
        
        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location]);


    return (
        <div>
            
           <Navbar collapseOnSelect expand="lg" className="navbar" >
                <Navbar.Brand href="/" className="ml-lg-5"><img src="/designr-logo.png" alt="" className="designr-logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto nav-links text-center">
                <Nav.Link href="/resources" className={clsx("mr-lg-4 nav-item1", activeC === "/resources" ? 'active' : 'red')}>Resources</Nav.Link>
                <Nav.Link href="/about" className={clsx("mr-lg-4 nav-item2", activeC === "/about" ? 'active' : '' )}>About</Nav.Link>
                <Nav.Link href="/jobBoard" className={clsx("mr-lg-3 nav-item3", activeC === "/jobBoard" ? 'active' : '')}><span>Job Board</span></Nav.Link>
                <Nav.Link href="/slackCommunity" className={clsx("nav-item4", activeC === "/slackCommunity" ? 'active' : '')}>Slack Community</Nav.Link>
                </Nav>
                {location.pathname === '/about' || location.pathname === '/jobBoard' || location.pathname === '/slackCommunity' || location.pathname === '/resourcesAfterSignIn' ? (
                        <div className="nav-right-links text-center">
                            {user?.result? (
                                <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                     </div>
                            ) : (
                                <>
                                 <img src="/navbarAvatar.png" alt="" className="navbarAvatar" />
                             <Badge badgeContent={3} className="navbarBadge" ></Badge>
                             </>
                            )}
                            
                        </div>)  :
                (
                    <Nav     className="nav-right-links text-center">
                <Nav.Link href="#signIn" className={clsx("ml-lg-3 pl-lg-3 nav-right-item1", activeC === '/signIn' ? 'active' : '')}
                onClick={()=>setModalShow(true)}>Sign In</Nav.Link>
                <Link to="/createAccount">
                    <Button className="mr-lg-5 ml-lg-3 nav-right-item2">Get Started</Button>
                </Link>
                    
                </Nav>
                )}
                
            </Navbar.Collapse>
            <SignInModal show={modalShow} onHide={() => setModalShow(false)}/>
        </Navbar>
        </div>
    )
}

export default TopNavbar;
