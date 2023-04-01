import { Router } from 'express'
import Controller from './controller.js'


export default class UserRoutes {
    router = new Router()

    constructor() {
        
    }

    apiRoute = this.router.get('/', (request, response) => {
        response.send('Usando rota da API')
    })
    getUsers = this.router.get('/users', Controller.getUsers)
    getUsersById = this.router.get('/users/:id', Controller.getUserById)
    createUser = this.router.post('/register', Controller.createUser)
    updateUser = this.router.put('/users/:id', Controller.updateUser)
    deleteUser = this.router.delete('/users/:id', Controller.deleteUser)
    
}
