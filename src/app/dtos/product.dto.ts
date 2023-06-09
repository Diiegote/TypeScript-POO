import { Product } from "../models/product.model";
import { Category } from "../models/category.model";

export interface CreateProductDto extends Omit<Product,'id' |  'category'>{
  categoryId: Category['id'];
}

export interface updateProductDto extends Partial<CreateProductDto>{};

