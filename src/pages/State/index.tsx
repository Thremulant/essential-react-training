import React, { Component, ReactElement } from 'react';
import { MainContainer } from '../../layouts';

export const StatePage = () => {
    return (
        <MainContainer title='1. State and life cycle'>
            <AddCount />
            <AddCountClass />
        </MainContainer >
    )
}


const AddCount = (): ReactElement => {


    return (
        <div className='row mb-5'>
            <h5>Basic counter</h5>
            <div className='col-8'>
                <input type='number' className='form-control' />
            </div>
            <div className='col-2'>
                <button className='btn btn-primary me-2'>+ Increase</button>
                <button className='btn btn-danger'>- Rest</button>
            </div>
        </div>
    )
}

class AddCountClass extends Component {

    constructor(props: any) {
        super(props);
        this.state = { counter: 0 };
    }


    render() {
        return (
            <div className='row mb-5'>
                <h5>Basic counter - CLASS</h5>
                <div className='col-8'>
                    <input type='number' className='form-control' value={this.state.counter} />
                </div>
                <div className='col-2'>
                    <button className='btn btn-primary me-2'>+ Increase</button>
                    <button className='btn btn-danger'>- Rest</button>
                </div>
            </div>
        )
    }
}
