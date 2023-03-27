import express from 'express';
import UserRoutes from './src/routes.js'
const UserRoutesInstance = new UserRoutes()

const app = express()
const port = 4200

app.use(express.json())

app.get('/', (request, response) => {
    response.send('Hello world')
})

app.use('/api/v1/users', UserRoutesInstance.apiRoute)

app.listen(port, () => {
    console.log(`App na porta ${port}`)
})