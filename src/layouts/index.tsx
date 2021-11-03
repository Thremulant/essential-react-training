import React, { ReactElement } from 'react';

export const MainContainer = ({ children, title }: { children?: any, title: string }) => {

  return (
    <div className='container bg-white p-4 h-100'>
      <header className='mb-5 text-dark'>
        <h1>
          {title}
        </h1>
      </header>
      <section>
        {children}
      </section>
    </div>
  )
}