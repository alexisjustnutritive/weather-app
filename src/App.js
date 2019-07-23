import React from 'react';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import Form from './components/Form';

function App() {
  return (
    <Container>
        <Header title={ 'Weather app' } />
        <Form />
    </Container>
  );
}

export default App;
