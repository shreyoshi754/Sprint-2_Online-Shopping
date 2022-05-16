

exports.addProduct=async(req, res, next) => {
  const { name, price, catagory } = req.body;
  console.log(req.body)
  res.send('Product added')

}
