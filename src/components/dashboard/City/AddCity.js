import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { authHeader } from '../../../services/auth-header';
import cityApi from '../../../api/cityApi';


const AddCity = () => {
    const [name, setName] = useState('');
    const [publish, setPublish] = useState('');
    const navigate = useNavigate();

    const data = {
        name: name,
        publish: publish
    }
    const Add = async (e) => {
        e.preventDefault();
        await cityApi.add(data);
        navigate("/dashboard");
    }
  return (
    <>
    <Form onSubmit={Add}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name"  onChange={ (e) => setName(e.target.value) } />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPublish">
        <Form.Label>Publish</Form.Label>
        <Form.Control type="text" placeholder="Publish"  onChange={ (e) => setPublish(e.target.value) } />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  )
}

export default AddCity