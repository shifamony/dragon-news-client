import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';



const Profile = () => {
    const {user} = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);

    //USEREF FUNCTION
    const photoURLRef = useRef(user.photoURL)

const handleSubmit = event => {
    event.preventDefault();
    console.log(name);
    console.log(photoURLRef.current.value)
}

//NAME CHANGE FUNCTION
const handleNameChange = event => {
    setName(event.target.value)
}

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasiName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control onChange={handleNameChange} defaultValue={name} type="text" placeholder="Your Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} type="text" placeholder="PhotoURL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control  type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>


        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
};

export default Profile;