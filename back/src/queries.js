class Queries {

    getUsers = 'SELECT * FROM users ORDER BY id ASC'

    getUsersById = 'SELECT * FROM users WHERE id = $1'

    getUsersByEmail = (email) => {
        const query = {
            text: 'SELECT * FROM users WHERE email = $1',
            values: [email]
        }
        return this.pool.query(query)
    }

    createUser = 'INSERT INTO users (name, email, phone, password) values ($1, $2, $3, $4) RETURNING *'

    loginUser = 'SELECT * FROM users WHERE email = $1'

    updateUser = 'UPDATE users SET name = $1, email = $2, phone = $3. password = $4 WHERE id = $5'

    deleteUser = 'DELETE FROM users WHERE id = $1'
    
}

export default Queries = new Queries()