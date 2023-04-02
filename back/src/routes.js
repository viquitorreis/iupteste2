import { Router } from 'express'
import Controller from './controller.js'
import isLoged from './middlewares/isLoged.js'

export default class UserRoutes {
    router = new Router()

    constructor() {
        
    }

    apiRoute = this.router.get('/', (request, response) => {
        response.send('Usando rota da API')
    })
    getUsers = this.router.get('/users', Controller.getUsers)
    getUsersById = this.router.get('/users/:id', isLoged, Controller.getUserById)
    createUser = this.router.post('/register', Controller.createUser)
    loginUser = this.router.post('/login', Controller.loginUser)
    updateUser = this.router.put('/users/:id', Controller.updateUser)
    deleteUser = this.router.delete('/users/:id', Controller.deleteUser)
    
}
