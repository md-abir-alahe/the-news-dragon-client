/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../../../assets/logo.png";
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className="text-secondary">
                    <small>Journalism Without Fear or Favour</small>
                </p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className="d-flex">
                <Button variant="danger">Danger</Button>
                <Marquee className="text-danger" speed={30}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto error distinctio, quod esse corrupti reiciendis expedita ut, illo dicta dolorum magni. Nemo animi reprehenderit ipsum dolorum beatae fuga odio quasi similique, maiores dolorem deserunt tenetur totam molestiae eum ab! Eligendi, quidem maiores. Eum unde dolores facere aut consequatur numquam, deleniti dolorum ipsum praesentium perferendis odit delectus dolore atque enim cum.</Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="secondary">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;
