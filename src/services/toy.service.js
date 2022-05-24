import { storageService } from "./async-storage.service"
import { utilService } from './util.service.js'

const STORAGE_KEY = 'toy'
const BASE_URL = `http://localhost:3030/api/toy/`

const labels = ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor"]


export const toyService = {
    query,
    getById,
    remove,
    save,
    getLabels

}

function query() {
    return storageService.query(STORAGE_KEY)
        // const URL = `${BASE_URL}`
        // return axios.get(URL).then(res => res.data)
}

function getById(toyId) {
    return storageService.get(STORAGE_KEY, toyId)
        // return axios.get(BASE_URL + toyId).then(res => res.data)
}

function remove(toyId) {
    return storageService.remove(STORAGE_KEY, toyId)
        // return axios.delete(BASE_URL + toyId).then(res => res.data)
}

function save(toy) {
    if (toy._id) {
        return storageService.put(STORAGE_KEY, toy)
            // return axios.put(BASE_URL + toy._id, toy).then(res => res.data)
    } else {
        return storageService.post(STORAGE_KEY, toy)
            // return axios.post(BASE_URL, toy).then(res => res.data)
    }
}

function getLabels() {
    console.log(labels)
    return labels
}


function getEmptyToy() {
    return {

    }
}

//TEST DATA
// storageService.post(STORAGE_KEY, {
//     name: "talking tom",
//     price: 100,
//     labels: ["Doll", "Battery Powered", "Baby"],
//     createdAt: new Date().toLocaleDateString(),
//     inStock: true
// }).then(x => console.log(x))