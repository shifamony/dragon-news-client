import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';



const Register = () => {

  const {createUser} = useContext(AuthContext);


  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.email.value;
    console.log(name, photoUrl, email, password)

     //USER FUNCTION

     createUser(email,password)
     .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
     })
     .catch(error => console.error(error))
  }


    return (
        
    <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter your name" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo Url</Form.Label>
        <Form.Control type="text" name="photoUrl" placeholder="Photo Url" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  name="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" required />
      </Form.Group>


      <Button variant="primary" type="submit">
        Register
      </Button>

      <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>

    </Form>
        
    );
};

export default Register;