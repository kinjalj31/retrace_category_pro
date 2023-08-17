const db = require('../db');

function getAllCategories(id = null, callback) {
    let query = 'SELECT * FROM categories';
    if (id) {
        query = `SELECT * FROM categories WHERE id = ? OR parent_id = ?`;
        db.query(query, [id, id], (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        });
    } else {
        console.log('hello1')
        db.query(query, (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        });
    }
}

module.exports = {
    getAllCategories
};
