const prisma = require('../Db/index')
exports.addProduct=async(req, res, next) => {
  const { name, price, catagory } = req.body;
  console.log(req.body)
  try {
    const product = await prisma.product.create({
        data:{name,price,catagory}
    });
    res.send(product);
    console.log("Product added");
} catch (error) {
    const errorToThrow = new Error();
    switch (error?.code) {
        case '23505':
            errorToThrow.message = 'Product already exists';
            errorToThrow.statusCode = 403;
            break;
        default:
            errorToThrow.statusCode = 500;
    }
    next(errorToThrow);
}
};
exports.viewProduct = async (req, res, next) => {
  let {name, price, catagory} = req.body;
   try{
      const allProducts = await prisma.user.findMany();
  res.send(allProducts);
}
catch(err){
  console.log(err)
}
};