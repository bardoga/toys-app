
import React from 'react';
import { connect } from "react-redux";
import { toyService } from '../services/toy.service.js';
import { loadToys, removeToy, saveToy } from '../store/actions/toy.action.js'


class _ToyEdit extends React.Component {
    state = {
        toy: null
    }

    componentDidMount() {
        console.log('component mounted from toy details')
        const { toyId } = this.props.match.params
        toyService.getById((toyId))
            .then((toy) => {
                this.setState({ toy })
            })
    }

    onclose = () => {
        this.props.history.push('/toys')
    }

    render() {
        return (
            <section className='toy-edit'>
                <h2>Update Toy:</h2>
                <label htmlFor="toy">Toy name:</label>
                <input type="text" />
                <br />
                <label htmlFor="price">Price</label>
                <input type="text" />
                <br />
                <label htmlFor="sale">On sale?</label>
                <input type="text" />
                <br />
                <button onClick={this.onclose}>Close</button>


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


export const ToyEdit = connect(
    mapStateToProps,
    mapDispatchToProps
)(_ToyEdit)