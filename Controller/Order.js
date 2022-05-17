const prisma = require('../Db/index')
exports.addOrder = async (req, res, next) => {
    var id = parseInt(req.params.id);
    var userId = parseInt(req.user.id);
    try {
        const existingCart = await prisma.cart.findUnique({
            where: {
                userId: userId
            },
        });
        const existingCartItem = await prisma.cartitem.findFirst({
            where: {
                productId: id, cartId: existingCart.id
            },
        });
        const orderItems = await prisma.order.create({
            data: { orderid: existingCartItem.id, userId: userId, price: existingCartItem.price }
        });
        return res.send(orderItems);
    }
    catch (err) {
        console.log(err);
    }
}
exports.viewOrder=async(req,res,next)=>{
    var userId=parseInt(req.user.id);
    var orderid = parseInt(req.order.orderid);
    try{
        const existingOrder = await prisma.cart.findUnique({
			where: {
				userId:userId
			},
		});
        if(!existingOrder){
            return res.send({
                "Status":"No Order found"
            })
        }
        res.send({
            "orders":existingOrder,
            "orderid":orderid,
            "userid":userId
        })
  
    }catch(err){
        console.log(err)
    }
    
}
