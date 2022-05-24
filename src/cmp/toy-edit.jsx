import React, { useEffect, useState, Component } from 'react';
import { useDispatch } from 'react-redux';
import { toyService } from '../services/toy.service.js';
import { saveToy } from '../store/actions/toy.action.js';
import Multiselect from 'multiselect-react-dropdown';


export const ToyEdit = (props) => {

    const [toy, setToy] = useState(null)
    // const [selectedValues, setSelectedValues] = useState(null)
    const dispatch = useDispatch()


    useEffect(() => {
        const { toyId } = props.match.params
        toyService.getById((toyId))
            .then((toy) => {
                setToy(toy)
            })
    }, [])

    const onclose = () => {
        props.history.push('/toys')
    }


    const HandleChange = (ev) => {
        console.log(ev)
        const target = ev.target
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setToy((prevToy) => ({ ...prevToy, [field]: value }))
    }

    const onSaveToy = (ev) => {
        ev.preventDefault()
        toyService.save({ ...toy })
            .then(() => {
                props.history.push('/toys')

            })
    }

    // const HandleSelect = (ev) => {
    //     console.log(ev[0].label)
    // }


    if (!toy) return <div>Loading...</div>
    console.log(toy.labels)
    const currToy = toy.name
    return (
        <section className='toy-edit'>
            <form onSubmit={onSaveToy}>
                <h3>Edit Toy: {currToy} </h3>
                <label htmlFor="toy">Toy name:</label>
                <input onChange={HandleChange} type="text" id='name' name='name' value={toy.name} />
                <br />
                <label htmlFor="price">Price</label>
                <input onChange={HandleChange} type="text" id='price' name='price' value={toy.price} />
                <br />
                <Multiselect
                    options={toyService.getLabels()} // Options to display in the dropdown
                    selectedValues={toy.labels} // Preselected value to persist in dropdown
                    // onSelect={onSelect} // Function will trigger on select event
                    // onRemove={onRemove} // Function will trigger on remove event
                    displayValue="name" // Property name to display in the dropdown options
                />
                <br />
                <button onClick={onclose}>Close</button>
                <button onClick={onSaveToy}>Save</button>

            </form>


        </section>
    )
}
