import React, { Component, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { MainContainer } from '../../layouts';

export const ComponentsPage = () => {

  return (
    <MainContainer title='1. Components Review'>

      <div className='row mb-5'>
        <div className='col-12'>
          <h4>Properties</h4>
        </div>
        <div className='col-6'>
          <Card />
        </div >
        <div className='col-6'>
          <CardClass />
        </div >
      </div >
      <div className='row mb-5'>
        <div className='col-12'>
          <h4>Childrens</h4>
        </div>
      </div>
      <div className='row mb-5'>
        <Link to='/components/solution'>Solution</Link>
      </div>

    </MainContainer >
  )
}

// FUNCTIONAL COMPONENT
const Card = (): ReactElement => {
  return (
    <div className='col-6'>
      <h5>Functional component</h5>
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">Card name</h5>
          <p className="card-text">Card Description</p>
          <a href=' ' className="btn btn-primary">Link</a>
        </div>
      </div>
    </div>
  )
}


// CLASS COMPONENT
class CardClass extends Component<any, any> {

  render() {
    return (
      <div className='col-6'>
        <h5>Class component</h5>
        <div className="card" >
          <div className="card-body">
            <h5 className="card-title">Card name</h5>
            <p className="card-text">Card Description</p>
            <a href=' ' className="btn btn-primary">Link</a>
          </div>
        </div>
      </div>
    )
  }
}

const ChildrenExample = ({ children, sidebar }: { children?: ReactElement, sidebar?: ReactElement }): ReactElement => {

  return (
    <div className='row '>
      <div className='col-8 bg-dark px-4 py-3'>
        {children}
      </div>
      <div className='col-4 bg-success px-4 py-3'>
        <h6>This is the sidebar</h6>
        {sidebar}
      </div>
    </div>
  )
}

interface ICardProps {
  name: string;
  desc: string;
  link: {
    url: string;
    text: string
  }
}

const mockData = [
  {
    Name: 'Desiree Hudson',
    Data: 'Nostrum iure repellat esse non autem rerum sunt.',
    Link: {
      Url: 'https://google.com',
      Text: 'See more'
    }
  },
  {
    Name: 'Juanita Shields II',
    Data: 'Est tempora consequuntur quo aperiam voluptas aut ullam ullam.',
    Link: {
      Url: 'https://stackoverflow.com',
      Text: 'See more'
    }
  },
  {
    Name: 'Cora Nolan',
    Data: 'Quis molestias aperiam vel dolore praesentium sapiente optio qui laborum.',
    Link: {
      Url: 'https://github.com',
      Text: 'See more'
    }
  },
]