import jwt from 'jsonwebtoken'
const jwt_secret = '71d5e60ba0f0a0254610ed5c7386a471801136eaa8183c1544a5e7ff213dd375'


const isLoged = (request, response, next) => {
    const { headers } = request;
    const token = headers.authorization;
    if (!token) {
        response.status(401).send('Não autorizado!')
    }
    jwt.verify(token, jwt_secret, null, (err, data) => {
        if (!err) {
            request.user = data;
            next();
        } else {
            response.status(401).send('Não autorizado!')
        }
    })

}

export default isLoged;