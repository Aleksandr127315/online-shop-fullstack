function getDatabaseUrl() {
    if (process.env.DATABASE_URL) {
        return process.env.DATABASE_URL;
    }

    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || '5432';
    const database = process.env.DB_NAME;
    const user = process.env.DB_USER;

    if (!database || !user) {
        throw new Error('Set DATABASE_URL or DB_NAME and DB_USER in .env');
    }

    const password = process.env.DB_PASSWORD
        ? `:${encodeURIComponent(process.env.DB_PASSWORD)}`
        : '';

    return `postgresql://${encodeURIComponent(user)}${password}@${host}:${port}/${encodeURIComponent(database)}`;
}

module.exports = { getDatabaseUrl };
