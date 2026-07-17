require('dotenv').config();
const cors = require('cors');
const express = require('express');
const err = require('./error.json');
const { PrismaPg } = require('@prisma/adapter-pg');
const { PrismaClient } = require('@prisma/client');
const { getDatabaseUrl } = require('./lib/database-url');

const adapter = new PrismaPg({ connectionString: getDatabaseUrl() });
const prisma = new PrismaClient({ adapter });
const app = express();
const PORT = Number(process.env.PORT);
app.use(express.json());
app.use(
    cors({
        origin: 'http://localhost:5174',
    }),
);

app.get('/ipod/price', async (req, res) => {
    try {
        // TODO: получить один продукт вместо много продуктов и вернуть его

        const product = await prisma.products.findMany({
            where: { title: 'iPod' },
        });
        // where: { price: { lt: 100 } }, // TODO: поменять фильтр чтобы получить именно айпод
        res.json(product[0].price); // вернуть один продукт который нашелся по фильтру выше
    } catch (e) {
        console.error(`Error:${e.message}`);
        res.status(500).json(err);
    }
});

app.get('/products', async (req, res) => {
    try {
        const products = await prisma.products.findMany({
            where: {},
        });

        res.json(products);
    } catch (e) {
        console.error(`Error:${e.message}`);
        res.status(500).json(err);
    }
});

app.get('/imac/price', async (req, res) => {
    try {
        // TODO: получить один продукт вместо много продуктов и вернуть его
        const products = await prisma.products.findMany({
            // where: { price: { lt: 100 } }, // TODO: поменять фильтр чтобы получить именно imac
        });
        res.json(products); // вернуть один продукт который нашелся по фильтру выше
    } catch (e) {
        console.error(`Error:${e.message}`);
        res.status(500).json(err);
    }
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

async function shutdown() {
    await prisma.$disconnect();
    process.exit(0);
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
