import { storageService } from "./async-storage.service"
import { utilService } from './util.service.js'

const STORAGE_KEY = 'toy'

const labels = ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor"]


export const toyService = {
    query,
    getById,
    remove,
    save

}

function query() {
    return storageService.query(STORAGE_KEY)
}

function getById(toyId) {
    return storageService.get(STORAGE_KEY, toyId)
}

function remove(toyId) {
    return storageService.remove(STORAGE_KEY, toyId)
}

function save(toy) {
    return storageService.put(storageService, toy)
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