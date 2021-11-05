import React, { Component, ReactElement, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { MainContainer } from '../../layouts';

/*
TODO:
1. Review the structure of what's being render
2. Show functional and class components
3. Modify both components to have properties
4. Show children and props working together ChildrenExample
*/

export const EffectsPage = () => {
    const [renderCount, setRenderCount] = useState<number>(0)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [counter, setCounter] = useState<number>(0)
    const [counterText, setCounterText] = useState<string>('')
    const [firstArray, setFirstArray] = useState<string[]>([])
    const [secondArray, setSecondArray] = useState<string[]>([])
    const [result, setResult] = useState<boolean>(false)

    // Triggered once, after the first render
    useEffect(() => {

    })

    // Triggered once, after the first render
    useEffect(() => {
        let loadingTimer: NodeJS.Timeout;

        if (isLoading) {
            loadingTimer = setInterval(() => {
                setIsLoading(false);
            }, 2000)
        }

        return () => clearInterval(loadingTimer);
    }, [])

    // Triggered every time the variable is updated
    useEffect(() => {

    }, [counter])

    // Triggered when either of the variable is updated
    useEffect(() => {

    }, [firstArray, secondArray])


    // Helpers to update the data
    const updateFirstArray = (newData: string[]) => {
        setFirstArray([...newData]);
    }
    const updateSecondArray = (newData: string[]) => {
        setSecondArray([...newData]);
    }

    if (isLoading) {
        return (
            <MainContainer title='3. Effects and renders'>
                <div className='d-flex justify-content-center pt-4'>
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                <div className='row mb-5'>
                    <Link to='/effects'>Return</Link>
                </div>
            </MainContainer>
        )
    }

    return (
        <MainContainer title='3. Effects and renders'>
            <section>
                <div className='row mb-5'>
                    <h5>Effect for one hook</h5>
                    <h1 className='text-center'>{counterText}</h1>
                    <button className='btn btn-primary col-6 mx-auto' onClick={() => setCounter(counter + 1)} disabled={counter >= 30}>Trigger COUNT render</button>
                </div>
            </section>
            <section>
                <div className='row mb-5'>
                    <h5>Effect for multiple hooks</h5>
                    <div className='col-4'>
                        <List items={firstArray} setItems={updateFirstArray} />

                    </div>
                    <div className='col-4'>
                        <List items={secondArray} setItems={updateSecondArray} />
                    </div>
                    <div className='col-4 bg-light'>
                        {result ? <h1>'WORKING!'</h1> : ''}
                    </div>
                </div>
            </section>
            <div className='row mb-5'>
                <Link to='/effects'>Return</Link>
            </div>
        </MainContainer >
    )
}

const List = ({ items, setItems }: { items: string[], setItems: (data: string[]) => void }) => {

    const [input, setInput] = useState<string>('')

    const updateArray = () => {
        const temp = items;
        temp.push(input);
        setItems(temp);
    }

    return (
        <>
            <div className='d-flex justify-content-center align-items-center'>
                <input type='text' value={input} onChange={(e) => setInput(e.currentTarget.value)} className='form-control me-2' />
                <button onClick={() => { updateArray(); setInput('') }} className='btn btn-success'>Add</button>
            </div>
            <h6>Lenght: {items.length}</h6>
            {items.map((x, k) => {
                return <div key={k}>{x}</div>
            })}
        </>
    )
}