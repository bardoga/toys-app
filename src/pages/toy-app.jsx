import React from 'react';
import { connect } from "react-redux";
import { toyService } from '../services/toy.service.js'
import { loadToys, removeToy, saveToy } from '../store/actions/toy.action.js'
import { ToyList } from '../cmp/toy-list.jsx'

class _ToysApp extends React.Component {
    componentDidMount() {
        this.props.loadToys()
    }


    onRemoveToy = (toyId, e) => {
        // e.stopPropogation()
        this.props.removeToy(toyId)
    }

    render() {
        const { toys } = this.props
        // console.log('your toys are :', toys)
        if (!toys) return <div>Loading toys...</div>
        return (
            <section className="toy-app">
                <h2>Toys App:</h2>
                <ToyList toys={toys} onRemoveToy={this.onRemoveToy} />
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


export const ToysApp = connect(
    mapStateToProps, mapDispatchToProps
)(_ToysApp)