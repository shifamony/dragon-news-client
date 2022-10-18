import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';

import {FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitch, FaWhatsapp} from "react-icons/fa";
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
          <ButtonGroup vertical>
                <Button variant="outline-primary mb-4"><FaGoogle></FaGoogle>Lotin with google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Lotin with github</Button>
         </ButtonGroup>
         <div className='mt-3'>
            <h5>Find us on</h5>
            <ListGroup>
                <ListGroup.Item><FaFacebook></FaFacebook>Facebook</ListGroup.Item>
                <ListGroup.Item><FaTwitch></FaTwitch>Twitter</ListGroup.Item>
                <ListGroup.Item><FaLinkedin></FaLinkedin>Linkdin</ListGroup.Item>
                <ListGroup.Item><FaWhatsapp></FaWhatsapp>Whatsapp</ListGroup.Item>
                <ListGroup.Item><FaInstagram></FaInstagram>Instagram</ListGroup.Item>
           </ListGroup>
         </div>
         <div>
            <BrandCarousel></BrandCarousel>
         </div>
        </div>
    );
};

export default RightSideNav;