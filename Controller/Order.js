const prisma = require('../Db/index')
exports.addOrder = async (req, res, next) => {
    var userId = parseInt(req.user.id);
    var productId = parseInt(req.product.id);
    let totalprice = 0;
    try {
        const existingCart = await prisma.cart.findUnique({
            where: {
                userId: userId
            },
        });
        if (!existingCart) {
            return res.send({
                "Status": "No Items found"
            })
        }

        const existingCartItem = await prisma.cartitem.findMany({
            where: {
                cartId: existingCart.id
            },
        })
        for (var i = 0; i < existingCartItem.length; i++) {
            totalprice += existingCartItem[i].price
        }
        console.log(totalprice)
        const orderItems = await prisma.order.create({
            data: { date: Date, product: productId, price: totalprice, userId: userId }
        })
        res.send("Items added");
        return res.send(orderItems);

    } catch (err) {
        console.log(err)
    }
}
exports.viewOrder = async (req, res, next) => {
    var userId = parseInt(req.user.id);
    let totalprice = 0;
    try {
        const existingOrder = await prisma.order.findMany({
            where: {
                userId: userId
            },
        });
        if (!existingOrder) {
            return res.send({
                "Status": "No Order found"
            })
        }
        else {
            return res.send(existingOrder);
        }
    } catch (err) {
        console.log(err)
    }
}



