const db = require('../Db');

class User {
    constructor({
        username, email, password,
    }) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
};

User.prototype.createUser = async function() {
    try {
        console.log(this.password)
        const { rows } = await db.query(
            `INSERT INTO users(username, email, password) 
            VALUES ($1, $2, $3)`,
            [this.username, this.email, this.password]
        );
        return rows; 
    } catch (error) {
        throw error;
    }
};
module.exports = User;