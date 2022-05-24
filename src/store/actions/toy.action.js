import { toyService } from "../../services/toy.service";


export function loadToys() {
    return dispatch => {
        return toyService.query()
            .then(toys => {
                const action = {
                    type: 'SET_TOYS',
                    toys
                }
                dispatch(action)
            })
            .catch(err => {
                console.error('ERROR:', err)
            })
    }
}


export function removeToy(toyId) {
    return (dispatch, getTheState) => {
        console.log('The state is', getTheState())
        toyService.remove(toyId)
            .then(() => {
                console.log('DELETED SUCCESSFULLU')
                dispatch({
                        type: 'REMOVE_TOY',
                        toyId
                    })
                    .catch(err => {
                        console.error('ERROR:', err)
                    })
            })
    }
}


export function saveToy(toy) {
    return dispatch => {
        const actionType = (toy._id) ? 'UPDATE_TOY' : 'ADD_TOY'
        toyService.save(toy)
            .then(savedToy => {
                dispatch({
                        type: actionType,
                        toy: savedToy
                    })
                    .catch(err => {
                        console.error('ERROR:', err)
                    })
            })
    }
}

export function setFilter(filterBy) {
    return (dispatch) => {
        return dispatch({
            type: 'SET_FILTERBY',
            filterBy
        })

    }
}