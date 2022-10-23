import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';



const Register = () => {

  const [error, setError] = useState('');
  //TERMS AND CONDITIONS FUNCTIONS
  const [accepted, setAccepted] = useState(false)
  const {createUser, updateUserProfile, varifyEmail } = useContext(AuthContext);


  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password)


     //USER FUNCTION

     createUser(email,password)
     .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        form.reset();

        //update profile
        handleUpdateUserProfile(name, photoURL);

        //verify email
        handleEmailVarify();
        toast.success('Please varify your email')
     })
     .catch(error => {
      console.error(error)
       setError(error.message)
    });
  }

  const handleAccepted = (e) => {
    setAccepted(e.target.checked)
  }

  //UPDATE PROFILE 
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL
    }
    updateUserProfile(profile)
    .then(() => {

    })
    .catch(error => console.error(error));
  }

 //EMAIL VARIFICATION
 const handleEmailVarify = () => {
  varifyEmail() 
  .then(() => {})
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
        <Form.Control type="text" name="photoURL" placeholder="Photo photoURL
" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  name="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="password" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check onClick={handleAccepted} type="checkbox" label={<>Accept <Link to='/terms'>Terms and Condition</Link></>} />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!accepted}>
        Register
      </Button>

      <Form.Text className="text-muted">
          {error}
        </Form.Text>

    </Form>
        
    );
};

export default Register;