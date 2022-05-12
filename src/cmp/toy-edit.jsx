
import React from 'react';
import { connect } from "react-redux";
import { loadToys, removeToy, saveToy } from '../store/actions/toy.action.js'


class _ToyEdit extends React.Component {
    componentDidMount() {
        console.log('component mounted from toy details')
    }

    render() {
        return (
            <section className='toy-edit'>
                You are here
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
    mapStateToProps, mapDispatchToProps
)(_ToyEdit)