import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'

const STORAGE_KEY = 'user'
const STORAGE_KEY_LOGGEDIN = 'loggedinUser'

export const userService = {
    // login,
    // logout,
    // signup,
    // getLoggedinUser,
    // updateBalance
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
    getUsers,
    getById,
    remove,
    update,
}

window.userService = userService

// function login(credentials) {
//     return storageService.query(STORAGE_KEY).then(users => {
//         const user = users.find(user => user.username === credentials.username &&
//             user.password === credentials.password)
//         if (user) sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
//         return user
//     })


// }

// function signup(userInfo) {
//     const user = {...userInfo, balance: 10000 }
//     return storageService.post(STORAGE_KEY, user)
//         .then((user) => {
//             sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
//             return user
//         })
// }

// function updateBalance(diff) {

//     const user = userService.getLoggedinUser()
//     user.balance += diff
//     return storageService.put(STORAGE_KEY, user)
//         .then((user) => {
//             sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
//             return user.balance
//         })
// }

// function logout() {
//     sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, null)
//     return Promise.resolve()
// }

// function getLoggedinUser() {
//     return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN))
// }


function getUsers() {
    // return httpService.get(`user`)
    return storageService.query('user')
}

async function getById(userId) {
    // const user = await httpService.get(`user/${userId}`)
    const user = await storageService.get('user', userId)
    return user
}


function remove(userId) {
    // return httpService.delete(`user/${userId}`)
    return storageService.remove('user', userId)

}

async function update(user) {
    // user = await httpService.put(`user/${user._id}`, user)
    await storageService.put('user', user)
    if (getLoggedinUser()._id === user._id) saveLocalUser(user)
    return user;
}

async function login(userCred) {
    console.log(userCred)
    return storageService.query(STORAGE_KEY).then(users => {
            const user = users.find(user => user.username === userCred.username &&
                user.password === userCred.password)
            if (user) sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
            return user
        })
        // console.log('userCred:', userCred)
        // const user = await httpService.post('auth/login', userCred)
        // socketService.emit('set-user-socket', user._id);
        // if (user) return saveLocalUser(user)
        // const users = await storageService.query('user')
        // const user = users.find(user => user.username === userCred.username)
        // return saveLocalUser(user)

}

async function signup(userCred) {
    console.log('userCred:', userCred)
    const user = await storageService.post('user', userCred)
        // const user = await httpService.post('auth/signup', userCred)
        // socketService.emit('set-user-socket', user._id);
    return saveLocalUser(user)
}
async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN)
        // socketService.emit('unset-user-socket');
        // return await httpService.post('auth/logout')
}

function saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN) || 'null')
}


// ;
// (async() => {
//     await userService.signup({ fullname: 'Puki Norma', username: 'user1', password: '123', score: 10000, isAdmin: false })
//     await userService.signup({ fullname: 'Master Adminov', username: 'admin', password: '123', score: 10000, isAdmin: true })
//     await userService.signup({ fullname: 'Muki G', username: 'muki', password: '123', score: 10000 })
// })()





// Test Data
// userService.signup({username: 'muki', password: 'muki1', fullname: 'Muki Ja', balance: 10000})
// userService.login({username: 'muki', password: 'muki1'})