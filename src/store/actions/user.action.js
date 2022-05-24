import { userService } from "../../services/user.service.js"


export function loadUsers() {
    return async(dispatch) => {
        try {
            dispatch({ type: 'LOADING_START' })
            const users = await userService.getUsers()
            dispatch({ type: 'SET_USERS', users })
        } catch (err) {
            console.log('UserActions: err in loadUsers', err)
        } finally {
            dispatch({ type: 'LOADING_DONE' })
        }
    }
}


export function login(credentials) {
    // Action Creator
    return (dispatch) => {
        userService
            .login(credentials)
            .then((user) => {
                dispatch({
                    type: 'SET_USER',
                    user,
                })
            })
            .catch((err) => {
                console.error('Error:', err)
                setUserMsg('Cannot login', 'bad')
            })
    }
}


export function logout() {
    // Action Creator
    return (dispatch) => {
        userService
            .logout()
            .then(() => {
                dispatch({
                    type: 'SET_USER',
                    user: null,
                })
            })
            .catch((err) => {
                console.error('Error:', err)
                setUserMsg('Cannot logout', 'bad')
            })
    }
}

export function signup(credentials) {
    // Action Creator

    return (dispatch) => {
        userService
            .signup(credentials)
            .then((user) => {
                dispatch({
                    type: 'SET_USER',
                    user,
                })
            })
            .catch((err) => {
                console.error('Error:', err)
                setUserMsg('Cannot signup', 'bad')
            })
    }
}


export function setUserMsg(msg, indication) {
    let fullMsg = { msg, indication }

    return (dispatch) => {
        dispatch({
            type: 'SET_MSG',
            fullMsg,
        })
    }
}