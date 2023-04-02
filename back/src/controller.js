import { pool } from './../db.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import Queries from './queries.js'
import jwt_secret from './consts/jwt.js'

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
        if (id != request.user.sub) {
            return response.status(403).send('Não autorizado')
        }
        pool.query(Queries.getUsersById, [id], (error, results) => {
            if (error) {
                throw error
            }
            return response.status(200).json(results.rows)
        })
    }

    createUser = async (request, response) => {
        const { name, email, phone, password } = request.body

        const hashedPassword = bcrypt.hashSync(password, 10)
        
        pool.query(Queries.createUser, [name, email, phone, hashedPassword], (error, results) => {
            if (error) {
                throw error
            }
            response.status(201).send(`User criado com ID: ${results.rows[0].id}`)
        })
    }

    loginUser = async (request, response) => {
        console.log('teste')
        const { email, password } = request.body;

        pool.query(Queries.loginUser, [email], (error, results) => {
            if (error) {
                throw error
            }
            console.log(results.rows)

            if (results.rows.length === 0) {
                response.status(401).send('Email ou senha invalido')
            } else {
                const user = results.rows[0]

                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) {
                        console.log(err)
                    }
                    if (isMatch) {
                        const token = jwt.sign({ sub: user.id, email: user.email }, jwt_secret)
                        response.status(200).json({ token })
                    } 
                    else {
                        response.status(401).send('Email ou senha invalido')
                    }
                })
            }
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