import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';



const Login = () => {
const [error, setError] = useState('');
const {signIn, setLoading} = useContext(AuthContext);

const navigate = useNavigate();

//function for private route
const location = useLocation();
const from = location.state?.from?.pathname || '/';

const handleSubmit = (event) => {
  event.preventDefault();

  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  console.log(email,password)

  signIn(email, password)
  .then(result => {
    const user = result.user;
    console.log(user);
    setError('');
    form.reset();
    // navigate('/') first way navigate korar
    // navigate(from, {replace: true});

    //conditional navigathe jodi email varified kori tahole ei func use korbo  na hole uporer ak line func use korbo
    if(user?.emailVerified){
      navigate(from, {replace: true});
    }else{
      toast.error('Your email is not varified')
    }
  })
  .catch((error) => {
   console.error(error);
   setError(error.message);
  })
  .finally(() => {
    setLoading(false);
  })

}

  return (
    <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  name="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" required />
      </Form.Group>


      <Button variant="primary" type="submit">
        Login
      </Button>

      <Form.Text className="text-muted">
          {error}
        </Form.Text>

    </Form>
  );
};

export default Login;








































// import React, { useContext, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


// const Login = () => {
//   const [error, setError] = useState('')
  
//     const {logIn} = useContext(AuthContext);
//     const navigate = useNavigate();

//     const handleSubmit = (event) => {
//         event.preventDefault();
//     const form = event.target;
//     const email = form.email.value;
//     const password = form.password.value;
     

//      logIn(email,password)
//      .then(result => {
//         const user = result.user;
//         console.log(user);
//         form.reset();
//         setError('');
//         navigate('/');
//      })

//      .catch(error => {
//       console.error(error);
//       setError(error.message);
//      })
//     }


//     return (
//         <div>
//     <Form onSubmit={handleSubmit}>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" name="email" placeholder="Enter email" required />
        
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" name="password" placeholder="Password" required />
//       </Form.Group>
     

//       <Button variant="primary" type="submit">
//         Login
//       </Button>

//       <Form.Text className="text-muted">
//           {error}
//         </Form.Text>

//     </Form>
//         </div>
//     );
// };

// export default Login;