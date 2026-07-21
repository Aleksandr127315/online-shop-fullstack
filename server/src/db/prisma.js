const { PrismaPg } = require('@prisma/adapter-pg');
const { PrismaClient } = require('@prisma/client');
const { getDatabaseUrl } = require('../../lib/database-url');

const adapter = new PrismaPg({ connectionString: getDatabaseUrl() });

const prisma = new PrismaClient({ adapter });

module.exports = { prisma };
