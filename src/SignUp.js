import React, { useRef, useState } from "react"
import './Login.css';
import { Form, Button } from "react-bootstrap"
import { useAuth } from "AuthConfirm"


export default function SignUp() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }


  return (
    <div className="container" style={{background: '#16295A', padding: '20px'}}>
    <header className='background-box'>
    
    <div style={{}}>
        <h1 
        style= {{color:'white', fontSize:'60px', letterSpacing: '0.5em', textAlign: 'center'}}>
        #pro-aux
        </h1>
        <p
        style={{color: 'white', fontSize: '25px', letterSpacing: '0.1em', textAlign: 'center'}}>
        The right songs for any occasion
        </p>
    </div >

    <div className='userinfo'>
      <p
      style={{marginBottom: '1px', marginTop: '1px', color: 'white', fontSize: '13px', letterSpacing: '0.1em', marginLeft: '900px'}}
      class="username">
      
      </p>
      <hr
      style={{marginTop: '1px', marginBottom:'20px'}}>
      </hr>
    </div>


    <div className='userInfoBtn'>
      <a href=''>
        <p
          style={{color: 'white', fontSize: '14px', letterSpacing: '0.1em', textAlign: 'center'}}>
          Create an account now to save your favorite songs
        </p>
        <p
          style={{color: 'white', fontSize: '14px', letterSpacing: '0.1em', textAlign: 'center'}}>
          , conveniently access frequently searched tags, and more.
        </p>
      </a>

    </div>

    <div className="row">
        <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="password" ref={passwordConfirmRef} required />
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                Sign Up
                </Button>
          </Form>            
    </div>
    <br>
    </br>

    </header>
    
  </div>
)};