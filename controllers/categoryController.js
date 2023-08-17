const categoryModel = require('../models/categoryModel');

//functions
function getAllCategories(req, res) {
    if (req.query.id) {
        const rootCategoryId = req.query.id;
        categoryModel.getAllCategories(rootCategoryId, (err, categories) => {
            if (err) {
                console.error('Error getting category tree:', err);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }
            res.json(categories);
        });
    } else {

        categoryModel.getAllCategories(null, (err, categories) => {
            if (err) {
                console.error('Error getting categories:', err);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }
            res.json(categories);
        });
    }
}

module.exports = {
    getAllCategories
};
