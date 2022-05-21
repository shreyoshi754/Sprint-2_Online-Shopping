const prisma = require('../Db/index')
exports.addProduct = async (req, res, next) => {
  let { name, price, catagory, url } = req.body;
  price = parseFloat(price);
  console.log(req.user);

  
  try {
    if (req.user.role === 'seller') {
      const product = await prisma.product.create({
        data: { name, price, catagory,url }
      });
      console.log("Product added");
      return res.send(product);
    }
    else {
      return res.send('You are not a seller')
    }

  } catch (error) {
    const errorToThrow = new Error();
    console.log(error);
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
  try {
    const allProducts = await prisma.product.findMany();
    console.log(allProducts);
    res.send({"productList":allProducts});
  }
  catch (err) {
    console.log(err)
  }
};


exports.deleteProduct = async (req, res, next) => {
  try {
    if (req.user.role === 'seller') {
      var id = parseInt(req.params.id);
      const deleted = await prisma.product.delete({
        where: {
          id: id,
        },
      })
      res.send(deleted);
    }
    else {
      return res.send('You are not a seller')
    }
  }
  catch (err) {
    console.log(err)
  }
};