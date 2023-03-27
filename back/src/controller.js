import { pool } from './../db.js'
import Queries from './queries.js'

class Controller {

    getUsers = (request, response) => {
        this.pool.query(Queries.getUsers, (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    }

    getUserById = (request, response) => {
        const id = parseInt(request.params.id)

        pool.query(Queries.getUsersById, [id], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    }

    createUser = (request, response) => {
        const { name, password } = request.body

        pool.query(Queries.createUser, [name, password], (error, results) => {
            if (error) {
                throw error
            }
            response.status(201).send(`User criado com ID: ${results.rows[0].id}`)
        })
    }

    updateUser = (request, response) => {
        const id = parseInt(request.params.id)
        const { name, password } = request.body

        pool.query(
            Queries.updateUser,
            [name, email, id],
            (error, results) => {
                if (error) {
                    throw error
                }
                response.status(200).send(`User com ID: ${id} modificado`)
            }
        )
    }

    deleteUser = (request, response) => {
        const id = parseInt(request.params.id)

        pool.query(Queries.deleteUser, [id], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User com ID: ${id} foi deletado`)
        })
    }

}

export default Controller = new Controller()