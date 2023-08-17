const express = require('express')
const app = express()
const port = 3000;
const categoryRoute = require('./routes/categoryRoutes');

//listen server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// Use categoryRoute for /api/categories
app.use('/api/categories', categoryRoute);
