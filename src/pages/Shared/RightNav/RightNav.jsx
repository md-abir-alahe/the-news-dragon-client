/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <div>
                <h4>Login With</h4>
                <Button className='mb-2' variant="outline-primary"> <FcGoogle /> Login with Google</Button>
                <Button variant="outline-secondary"> <FaGithub /> Login with Github</Button>
            </div>
            <div>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <Card className="bg-dark text-white">
                    <Card.Img src={bg} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Create an Amazing Newspaper</Card.Title>
                        <Card.Text>
                            Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                        </Card.Text>
                        <Button variant="danger">Learn More</Button>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </div>
    );
};

export default RightNav;