import React from 'react'
import Multiselect from 'multiselect-react-dropdown'
// import TextField from '@mui/material/TextField'
import { setFilter } from '../store/actions/toy.action'
import { connect } from 'react-redux'


export class _ToyFilter extends React.Component {

    state = {
        filterBy: {
            name: '',
            inStock: '',
            labels: []
        },
        options: [
            'On wheels',
            'Box game',
            'Art',
            'Baby',
            'Doll',
            'Puzzle',
            'Outdoor']
    }

    onHandleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
            this.props.setFilter(this.state.filterBy)
        })


    }

    onSelect = (selectedList) => {
        this.setState((prevState => ({ filterBy: { ...prevState.filterBy, labels: selectedList } })), () => {
            this.props.setFilter(this.state.filterBy)
        })
    }
    onRemove = (selectedList) => {
        this.setState((prevState => ({ filterBy: { ...prevState.filterBy, labels: selectedList } })), () => {
            this.props.setFilter(this.state.filterBy)
        })
    }
    render() {
        const { name, inStock } = this.state
        return (
            <section className='toy-filter'>
                <div className="filter-area">
                    {/* <TextField onChange={this.onHandleChange} value={name} name="name" id="outlined-basic" label="Search" variant="outlined" /> */}
                    <input type="text" placeholder='filter by name' style={{ margin: '5px' }}
                        onChange={this.onHandleChange} />
                    <select name="labels" id="labels">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="2">3</option>
                    </select>
                    <Multiselect
                        isObject={false}
                        placeholder='Labels:'
                        options={this.state.options}
                        selectedValues={this.state.filterBy.labels}
                        onSelect={this.onSelect}
                        onRemove={this.onRemove}
                        displayValue="name"
                        style={{width:'400px'}}
                    />

                </div>

            </section>
        )
    }
}


function mapStateToProps(storeState) {
    return {
    }
}
const mapDispatchToProps = {
    setFilter
}

export const ToyFilter = connect(mapStateToProps, mapDispatchToProps)(_ToyFilter)