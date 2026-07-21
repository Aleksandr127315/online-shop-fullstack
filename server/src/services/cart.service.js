const { prisma } = require('../db/prisma');

function getCartByUserId(userId) {
    return prisma.carts.findUnique({
        where: {
            user_id: userId,
        },
        include: {
            cart_items: {
                include: {
                    products: true,
                },
            },
        },
    });
}

module.exports = { getCartByUserId };
