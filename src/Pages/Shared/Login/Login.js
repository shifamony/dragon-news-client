import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Login = () => {
  
    const {signIn} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
     console.log(email, password)

     signIn(email,password)
     .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
     })
     .catch(error => console.error(error))

    }




    return (
        <div>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" required />
      </Form.Group>
     

      <Button variant="primary" type="submit">
        Login
      </Button>

      <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>

    </Form>
        </div>
    );
};

export default Login;