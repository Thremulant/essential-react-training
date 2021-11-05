import React, { Component, ReactElement, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { MainContainer } from '../../layouts';

/* 
TODO:
1. Review parent to child structure 
2. Show the state of each of the components and their renders
3. Correct the types for state and properties 
4. Show memoization in action
*/


export const StatePage = () => {
    const [input, setInput] = useState<string>('');


    return (
        <MainContainer title='2. State'>
            <div className='row mb-5'>
                <div className='col-4'>
                    <input className='form-control' value={input} onChange={(e) => setInput(e.currentTarget.value)} />
                </div>
                <div className='col-2'>
                    <button className='btn btn-primary' onClick={() => setInput('')}>Clear the input</button>
                </div>
            </div>
            <AddCount text={''} />
            <AddCountClass text={''} />
            <div className='row mb-5'>
                <Link to='/state/solution'>Solution</Link>
            </div>
        </MainContainer >
    )
}

const AddCount = ({ text }: { text: string }): ReactElement => {

    return (
        <div className='row mb-5'>
            <h5>Basic counter</h5>
            <h5>Parent text: {text}</h5>
            <div className='col-8'>
                <input type='number' className='form-control' defaultValue={0} />
            </div>
            <div className='col-2'>
                <button className='btn btn-primary me-2' >+ Add</button>
                <button className='btn btn-danger' >- Rest</button>
            </div>
        </div>
    )
}


class AddCountClass extends Component<ICounterProps, any>  {

    render() {
        return (
            <div className='row mb-5'>
                <h5>Basic counter - CLASS</h5>
                <h5>Parent text: {this.props.text}</h5>
                <div className='col-8'>
                    <input type='number' className='form-control' defaultValue={0} />
                </div>
                <div className='col-2'>
                    <button className='btn btn-primary me-2' >+ Add</button>
                    <button className='btn btn-danger'>- Rest</button>
                </div>
            </div>
        )
    }
}


interface ICounterProps {
    text: string;
}

interface ICountState {
    counter: number;
}