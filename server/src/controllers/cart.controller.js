const { getCartByUserId } = require('../services/cart.service');
const err = require('../../error.json');
async function getCart(req, res) {
    try {
        const cart = await getCartByUserId(1);
        if (!cart) {
            return res.status(404).json(err.cartNotFound);
        }

        const items = cart.cart_items.map((cartItem) => {
            return {
                cartItemId: cartItem.id,
                id: cartItem.products.id,
                title: cartItem.products.title,
                price: cartItem.products.price,
                imageUrl: cartItem.products.imageUrl,
                count: cartItem.quantity,
            };
        });

        return res.json({ id: cart.id, userId: cart.user_id, items });
    } catch (e) {
        console.error(`Error:${e.message}`);
        res.status(500).json(err.cartLoadFailed);
    }
}

module.exports = { getCart };
