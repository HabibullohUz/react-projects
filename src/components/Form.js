import React, { useRef, useState } from 'react'
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function FormReact() {

  const [user, setUser] = useState({})
  const sarlavha = useRef(null)

  const handleForm = (event) => {
    event.preventDefault()
    sarlavha.current.innerText = `
    My name is ${user.name} and ${user.email}, ${user.username}, ${user.password}
    `
  }

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setUser({ ...user, [name]: value })
  }

  return (
    <Card className="m-5">
      <Form onSubmit={handleForm} className='m-5'>

        <Form.Group className="" controlId="formReact">
          <Form.Label className='mb-0'>Name</Form.Label>
          <Form.Control
            className='mb-3'
            type="text"
            placeholder="name"
            name='name'
            value={user.name}
            onChange={handleChange}
          />

          <Form.Label className='mb-0'>Email</Form.Label>
          <Form.Control
            className='mb-3'
            type='email'
            placeholder='email@gamil.com'
            name='email'
            value={user.email}
            onChange={handleChange}
          >
          </Form.Control>

          <Form.Label className='mb-0'>Username</Form.Label>
          <Form.Control
            className='mb-3'
            type='text'
            placeholder='username'
            name='username'
            value={user.username}
            onChange={handleChange}

          >

          </Form.Control>

          <Form.Label className='mb-0'>Password</Form.Label>
          <Form.Control
            className='mb-3'
            type='password'
            placeholder='password'
            name='password'
            value={user.password}
            onChange={handleChange}

          >

          </Form.Control>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={handleForm}

        >

          Update
        </Button>
      </Form>
      <h1 ref={sarlavha}>awd</h1>
    </Card>
  );
}

export default FormReact;