import { ProductHttpService } from "./service/product-http-service";


(async () => {
  const productService = new ProductHttpService();

  const products = await productService.getAll();
  console.log(products);
})();