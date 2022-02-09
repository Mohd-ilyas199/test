import React from 'react';
import { Form, Button, } from 'react-bootstrap';
import "./login.css"

const Login = () => {
    return (
        <div>
            <div  className='mainDiv'>
            <div>
                <img className='img_' src='hall.jpg'></img>
            </div>
            <div className='div1_'>
                <h1>Login</h1>
               <br />
               <br />
                <Form>
  <Form.Group className="mb-3" >
    <Form.Label className="lbl">Email</Form.Label>
    <Form.Control className="label" type="email" />
  </Form.Group>
  <br />
  <Form.Group className="mb-3">
    <Form.Label  className="lbl">Password</Form.Label>
    <Form.Control className="label" type="password" />
  </Form.Group>
  <br />
  <Form.Group className="chkbox">
    <Form.Check type="checkbox" label="Remember Me" /> <a href="/">Forgot Password?</a>
  </Form.Group>
  <br />
  <br />

  <Button variant="primary" type="submit" className='b1'>
    Submit
  </Button>
  <div className='div2_'>
                <span className='spans'>About us</span>
                <span  className='spans'>Terms conditions</span>
                <span  className='spans'>Privacy policy</span>
                <span  className='spans' >Contact Us</span>
            </div>
            <div className='div3_'>
                <span className='span'>© Copyright 2021, VenturesSky Ltd</span>
            </div>
</Form>

            </div>
           
            </div>
          
        </div>
    );
};

export default Login;