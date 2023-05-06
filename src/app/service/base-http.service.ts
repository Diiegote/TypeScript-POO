import axios from 'axios';

import { Category } from './../models/category.model';
import { Product } from './../models/product.model';
import { updateProductDto } from '../dtos/product.dto';


export class BaseHttpService<TypeClass>{

  constructor(
    protected url: string
  ) { }

  async getAll() {
    const { data } = await axios<TypeClass[]>(this.url);
    return data;
  }

  async upadate<ID,DTO>(id:ID,changes:DTO){
    const { data } = await axios.put(`${this.url}/${id}`, changes)
    return data;
  }
}

(async () => {
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const url2 = 'https://api.escuelajs.co/api/v1/categories';

  const productService = new BaseHttpService<Product>(url1);
  const rta = await productService.getAll()
  console.log(rta.length);

  productService.upadate<Product['id'],updateProductDto>(1,{
    title: 'saddf',
    price:12
  })

  const categoryService = new BaseHttpService<Category>(url2);
  const rta1 = await categoryService.getAll()
  console.log(rta1.length);
})();