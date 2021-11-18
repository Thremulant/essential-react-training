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
          <Card name={mockData[0].Name} desc={mockData[0].Data} link={{ url: mockData[0].Link.Url, text: mockData[0].Link.Text }} />
        </div >
        <div className='col-6'>
          <CardClass name={mockData[1].Name} desc={mockData[1].Data} link={{ url: mockData[1].Link.Url, text: mockData[1].Link.Text }} />
        </div >
      </div >
      <div className='row mb-5'>
        <div className='col-12'>
          <h4>Childrens</h4>
          <ChildrenExample sidebar={<h1>Hello there!</h1>}>
            <>
              <Card name={mockData[0].Name} desc={mockData[0].Data} link={{ url: mockData[0].Link.Url, text: mockData[0].Link.Text }} />
              <CardClass name={mockData[1].Name} desc={mockData[1].Data} link={{ url: mockData[1].Link.Url, text: mockData[1].Link.Text }} />
            </>
          </ChildrenExample>
        </div>
      </div>
      <div className='row mb-5'>
        <Link to='/components/solution'>Solution</Link>
      </div>

    </MainContainer>
  )
}

// FUNCTIONAL COMPONENT
const Card = ({ name, desc, link }: ICardProps): ReactElement => {
  return (
    <div className='col-6'>
      <h5>Functional component</h5>
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{desc}</p>
          <a href={link.url} className="btn btn-primary">{link.text}</a>
        </div>
      </div>
    </div>
  )
}


// CLASS COMPONENT
class CardClass extends Component<ICardProps, any> {


  render() {
    const { name, desc, link } = this.props;
    return (
      <div className='col-6'>
        <h5>Class component</h5>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{desc}</p>
            <a href={link.url} className="btn btn-primary">{link.text}</a>
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

interface ICardBody extends ICardProps {
  themeColor: 'btn-primary' | 'btn-success'
}

const CardBody = ({ name, desc, link, themeColor }: ICardBody) => {
  return (
    <div className="card-body bg-transparent">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{desc}</p>
      <a href={link.url} className={`btn ${themeColor ? themeColor : 'btn-primary'}`} >{link.text}</a>
    </div>
  )
}