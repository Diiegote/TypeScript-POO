import {validate} from 'class-validator';
import { updateProductDto } from "../dtos/product.dto";
import { Product } from "../models/product.model";
import { BaseHttpService } from "./base-http.service";
import { ProductHttpService } from "./product-http2.service";

export class ProductCRUDService{
  private url = 'https://api.escuelajs.co/api/v1/products';
  private http = new ProductHttpService(this.url);

  async update(id:Product['id'],dto:updateProductDto){
    this.http.otroRequest();
    //validate(dto)
    return this.http.upadate(id,dto);
  }
}