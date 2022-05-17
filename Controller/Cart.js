const prisma = require('../Db/index')
exports.addCart=async(req,res,next)=>{
    var id= parseInt(req.params.id);
    var userId=parseInt(req.user.id);
    try{
        //fatching data
        const product = await prisma.product.findUnique({
			where: {
				id:id
			},
		});
        //fatching cart
        const existingCart = await prisma.cart.findUnique({
			where: {
				userId:userId
			},
		});

    //inserting to non-existing cart
    if(!existingCart){
        const cart = await prisma.cart.create({
                data:{userId}
            })

        const cartItem = await prisma.cartitem.create({
            data:{productId:id,cartId:cart.id,item:1,price:product.price}
    
        })
        console.log(cartItem);
        return res.send(cartItem);

        
    };
    
   //fatchingCartItems
    const existingCartItem = await prisma.cartitem.findFirst({
        where: {
            productId:id,cartId:existingCart.id
        },
    })

    if(!existingCartItem){

        const cartItem = await prisma.cartitem.create({
            data:{productId:id,cartId:existingCart.id,item:1,price:product.price}
    
        })

        console.log(cartItem);
        return res.send(cartItem);

    }

    let price = existingCartItem.price + product.price;
    let item = existingCartItem.item + 1;
    const cartItem = await prisma.cartitem.update({
        where: {
            id:existingCartItem.id,
          },
          data: {
            price,item
          },
    })
    return res.send(cartItem);

    }catch(err){
        console.log(err);
    }

    

}

exports.viewCart=async(req,res,next)=>{
    var userId=parseInt(req.user.id);
    let totalprice=0;
    try{
        const existingCart = await prisma.cart.findUnique({
			where: {
				userId:userId
			},
		});

        if(!existingCart){
            return res.send({
                "Status":"No Cart found"
            })
        }

        const existingCartItem = await prisma.cartitem.findMany({
            where: {
                cartId:existingCart.id
            },
        })

        
        for(var i=0;i<existingCartItem.length;i++){
                totalprice+=existingCartItem[i].price
        }
        console.log(totalprice)
        res.send({
            "totalPrice":totalprice,
            "cart":existingCartItem
        })
  
    }catch(err){
        console.log(err)
    }
    
}