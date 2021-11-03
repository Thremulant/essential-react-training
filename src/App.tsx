import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Link } from 'react-router-dom';
import { MainContainer } from './layouts';

function App() {
  return (
    <MainContainer title='Essential Training'>
      <section>
        <div><Link to='/state'><h3>1. State and life cycle</h3></Link></div>
        <div><Link to='/life-cycle'><h3>2. Effects and render</h3></Link></div>
        <div><Link to='/components'><h3>3. Creating components</h3></Link></div>
        <div><Link to='/context'><h3>4. Context</h3></Link></div>
        <div><Link to='/queries'><h3>5. React-Queries</h3></Link></div>
      </section>
    </MainContainer>
  );
}

export default App;
