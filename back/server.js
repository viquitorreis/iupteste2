import express from 'express';
import UserRoutes from './src/routes.js'
import cors from 'cors'
const UserRoutesInstance = new UserRoutes()

const app = express()
const port = 4200

app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
    response.send('Hello world')
})

app.use('/api/v1/users', UserRoutesInstance.apiRoute)

app.listen(port, () => {
    console.log(`App na porta ${port}`)
})