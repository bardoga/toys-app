import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import { loadToys, removeToy, saveToy } from '../store/actions/toy.action.js'
import { ToyList } from '../cmp/toy-list.jsx'
import { ToyFilter } from '../cmp/toy-filter.jsx'

export const ToysApp = (props) => {

    const { toys } = useSelector((storeState) => storeState.toyModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadToys())
        console.log(props)
    }, [])



    const onRemoveToy = (toyId) => {
        dispatch(removeToy(toyId))
    }



    const addToy =() => {
        props.history.push('/toys/edit/BoZFd')

    }

    console.log('your toys are :', toys)
    if (!toys) return <div>Loading toys...</div>
    return (
        <section className="toy-app">
            <h2>Toys App:</h2>
            <ToyFilter/>
            <button onClick={addToy} className='new-toy'>Add Toy</button>
            <ToyList toys={toys} onRemoveToy={onRemoveToy} />
        </section>
    )

}
