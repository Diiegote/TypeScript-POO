import { ProductMemoryService } from "./service/product-memory.service";

const productService = new ProductMemoryService();


productService.create({
  title: "Producto 1",
  price: 100,
  description: "gfsdgdfg",
  categoryId: 12,
  images: []

});
const products = productService.getAll();

const productsId = products[0].id;

productService.update(productsId, {
  title: "Producto cambiado",
  price:500,
  description: "producto 1"
})

console.log(productService.findOne(productsId));
