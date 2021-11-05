import React, { Component, ReactElement, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { MainContainer } from '../../layouts';

/* 
TODO:
1. Review parent to child structure 
2. Show the state of each of the components and their renders
3. Correct the types for state and properties 
4. Show memoization in action
*/


export const StateSolution = () => {
    const [input, setInput] = useState<string>('Hello there...');
    const [inputControl, setInputControl] = useState<boolean>(false);


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
            <AddCount text={input} setText={setInput} />
            <AddCountClass text={input} />
            <div className='row mb-5'>
                <Link to='/state'>Return</Link>
            </div>
        </MainContainer >
    )
}

const AddCount = ({ text, setText }: { text: string, setText: React.Dispatch<React.SetStateAction<string>> }): ReactElement => {
    const [counter, setCounter] = useState<number>(0)

    return (
        <div className='row mb-5'>
            <h5>Basic counter</h5>
            <h5>Parent text: {text}</h5>
            <div className='col-8'>
                <input type='number' className='form-control' value={counter} onChange={(e) => setCounter(parseInt(e.currentTarget.value))} />
            </div>
            <div className='col-2'>
                <button className='btn btn-primary me-2' onClick={() => setCounter(counter + 1)}>+ Add</button>
                <button className='btn btn-danger' onClick={() => setCounter(counter - 1)}>- Rest</button>
            </div>
            <div className='col-12'>
                <div className='btn btn-primary' onClick={() => setText('General Kenobi!')}>Correct answer</div>
            </div>
        </div>
    )
}

class AddCountClass extends Component<ICounterProps, any>  {

    public state;
    constructor(props: any) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    render() {
        return (
            <div className='row mb-5'>
                <h5>Basic counter - CLASS</h5>
                <h5>Parent text: {this.props.text}</h5>
                <div className='col-8'>
                    <input type='number' className='form-control' value={this.state.counter} onChange={(e: any) => { this.setState({ counter: parseInt(e.target.value) }); }} />
                </div>
                <div className='col-2'>
                    <button className='btn btn-primary me-2' onClick={() => this.setState({ counter: this.state.counter + 1 })}>+ Add</button>
                    <button className='btn btn-danger' onClick={() => this.setState({ counter: this.state.counter - 1 })}>- Rest</button>
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