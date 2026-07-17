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

app.get('/slider', async (req, res) => {
    try {
        const products = await prisma.products.findMany();
        res.json(products);
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
