import React from 'react';
import { connect } from "react-redux";
import { toyService } from '../services/toy.service.js';
import { loadToys, removeToy, saveToy } from '../store/actions/toy.action.js'


class _ToyDetails extends React.Component {
    state = {
        toy: null
    }

    componentDidMount() {
        console.log('component mounted from toy details:', this.props.match.params)
        const { toyId } = this.props.match.params
        toyService.getById((toyId))
            .then((toy) => {
                this.setState({ toy })
            })
    }


    onClose = () => {
        this.props.history.push('/toys')
    }


    render() {
        const { toy } = this.state
        if (!toy) return <div>Loading...</div>
        return (
            <section className='toy-details'>
                <h2>Toy: {toy.name}</h2>
                <h2>Price: {toy.price}</h2>
                <h2>In Stock: {toy.inStock ? "yes" : "no"}</h2>
                <h2>Added at: {toy.createdAt}</h2>
                <button onClick={this.onClose}>Close</button>
            </section>
        )
    }
}

const mapStateToProps = (storeState) => {
    return {
        toys: storeState.toyModule.toys
    }
}
const mapDispatchToProps = {
    loadToys,
    removeToy,
    saveToy

}


export const ToyDetails = connect(
    mapStateToProps, mapDispatchToProps
)(_ToyDetails)