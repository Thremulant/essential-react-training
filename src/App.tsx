import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Link } from 'react-router-dom';
import { MainContainer } from './layouts';

function App() {
  return (
    <MainContainer title='Essential Training'>
      <section>
        <div><Link to='/components'><h3>1. Components review</h3></Link></div>
        <div><Link to='/state'><h3>2. State and life cycle</h3></Link></div>
        <div><Link to='/effects'><h3>3. Effects and render</h3></Link></div>
        <div><h3>4. Context</h3></div>
        <div><h3>5. React-Queries</h3></div>
      </section>
    </MainContainer>
  );
}

export default App;
