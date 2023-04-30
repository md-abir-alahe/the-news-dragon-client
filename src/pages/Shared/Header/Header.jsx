/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {


    const { user } = useContext(AuthContext);

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
        </Container>
    );
};

export default Header;
