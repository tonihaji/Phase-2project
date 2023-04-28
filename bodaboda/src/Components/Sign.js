import React, { useState } from "react";
import * as Components from './Components';

function Sign() {
  const [signIn, toggle] = React.useState(true);
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
const [formData,setFormData] = useState([])
  const handleSubmit = (event) => {
    event.preventDefault();
    
    setFormData([...formData, {name,email,password}])
    setName("")
    setEmail("")
    setPassword("")
    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name,email,password})
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
  };
  console.log(formData)

  return (
    <div className="p-5 container text-center mt-5">
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form onSubmit={handleSubmit}>
            <Components.Title>Create Account</Components.Title>
            <Components.Input type='text' placeholder='Name' value={name} onChange={(event) => setName(event.target.value)} />
            <Components.Input type='email' placeholder='Email' value={email} onChange={(event) => setEmail(event.target.value)} />
            <Components.Input type='password' placeholder='Password' value={password} onChange={(event) => setPassword(event.target.value)} />
            <Components.Button>Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Sign in</Components.Title>
            <Components.Input type='email' placeholder='Email' />
            <Components.Input type='password' placeholder='Password' />
            <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
            <Components.Button>Sigin In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>

            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter Your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sigin Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>

          </Components.Overlay>
        </Components.OverlayContainer>

      </Components.Container>
    </div>
  )
}

export default Sign;
