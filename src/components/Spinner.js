import React from 'react';
import {Container, Spinner} from 'react-bootstrap';

const spinner = () => {
  return (
    <Container 
      className='d-flex justify-content-center vh-100 vw-100 align-items-center'
    >
      <Spinner 
        animation="border" 
      />
    </Container>
  );
}

export default spinner;
