const express = require('express');
const sliderData = require('./imageSlider.json');
const err = require('./error.json');
const { Pool } = require('pg'); //библиотека для подключения к постгресу

const pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
});
const app = express();
const PORT = Number(process.env.PORT);
app.use(express.json());

app.get('/slider', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products');
        res.json(result.rows);
    } catch (e) {
        console.error(`Error:${e.message}`);
        res.status(500).json(err);
    }
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
