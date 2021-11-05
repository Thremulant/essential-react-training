import React, { ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const MainContainer = ({ children, title }: { children?: any, title: string }) => {
  const location = useLocation();

  return (
    <div className='container bg-white p-4 h-100'>
      <header className='mb-5 text-dark d-flex justify-content-between align-items-center '>
        <h1>
          {title}
        </h1>
        {location.pathname !== '/' && <Link to='/' className='btn btn-success'>Home</Link>}
      </header>
      <section>
        {children}
      </section>
    </div>
  )
}