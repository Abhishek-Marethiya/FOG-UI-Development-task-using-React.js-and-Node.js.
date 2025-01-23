const express = require('express');
const cors = require('cors');
const dotenv=require('dotenv');

dotenv.config();

const PORT=process.env.SERVER_PORT || 8080
console.log('Environment Variables:', process.env.SERVER_PORT);
const app = express();
app.use(cors({
    origin: 'https://fog-ui-development-task-frontend.vercel.app', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
// Import sample data
const products = require('./data/products.json');

// API endpoint for sorting, filtering, and pagination
app.get('/api/products', (req, res) => {
    const { brand, category, priceMin, priceMax, sortBy, order = 'asc', page = 1, limit = 12 } = req.query;

    let filteredProducts = products;

    // Apply filters
    if (brand) filteredProducts = filteredProducts.filter(p => p.brand === brand);
    if (category) filteredProducts = filteredProducts.filter(p => p.category === category);
    if (priceMin) filteredProducts = filteredProducts.filter(p => p.price >= +priceMin);
    if (priceMax) filteredProducts = filteredProducts.filter(p => p.price <= +priceMax);

    // Apply sorting
    if (sortBy) {
        filteredProducts.sort((a, b) => {
            const comparison = sortBy === 'price'
                ? a[sortBy] - b[sortBy]
                : a[sortBy].localeCompare(b[sortBy]);
            return order === 'asc' ? comparison : -comparison;
        });
    }

    // Apply pagination
    const startIndex = (page - 1) * limit;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + parseInt(limit));

    res.json({
        total: filteredProducts.length, 
        page: +page,                    
        limit: +limit,                  
        products: paginatedProducts     
    });
});


app.listen(PORT, () => console.log(`Server running on ${PORT}`));
