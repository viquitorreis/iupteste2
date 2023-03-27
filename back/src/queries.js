class Queries {

    getUsers = 'SELECT * FROM users ORDER BY id ASC'

    getUsersById = 'SELECT * FROM users WHERE id = $1'

    createUser = 'INSERT INTO users (name, email, phone, password) values ($1, $2) RETURNING *'

    updateUser = 'UPDATE users SET name = $1, email = $2, phone = $3. password = $4 WHERE id = $5'

    deleteUser = 'DELETE FROM users WHERE id = $1'
    
}

export default Queries = new Queries()