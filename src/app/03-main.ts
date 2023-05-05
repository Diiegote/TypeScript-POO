import { ProductHttpService } from "./service/product-http-service";


(async () => {
  try {
    const productService = new ProductHttpService();
    console.log('--'.repeat(10));
    console.log('getAll');
    const products = await productService.getAll();
    console.log(products);
    console.log(products.map(item => item.price));


    const productId = products[0].id;
    console.log('--'.repeat(10));
    console.log('Update');

    const productEdit = await productService.update(productId, {
      price: 25000,
      title: 'New Titleee',
      description: 'New Descriptionsss',
    });
    console.log('Producto editado', productEdit);

    console.log('--'.repeat(10));
    console.log('findOne');

    const product = await productService.findOne(productId);
    console.log(product);

  } catch (error) {
    console.log(error);
  }
})();