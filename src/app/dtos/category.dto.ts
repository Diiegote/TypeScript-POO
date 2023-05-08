import { IsUrl, IsNotEmpty, Length, IsEnum, validateOrReject, IsOptional } from 'class-validator';


import { AccessType, Category } from "../models/category.model";
// se le agrega una I a CreateCategoryDto para diferenciar una interface con una class
export interface ICreateCategoryDto extends Omit<Category, 'id'> { };
export class CreateCategoryDto implements ICreateCategoryDto {

  @IsNotEmpty()
  @Length(4, 140)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;

}


(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'asdfsdfsd';
    dto.image = 'https://api.escuelajs.co/api/v1/products';
    await validateOrReject(dto);

  } catch (error) {
    console.log(error);
  }
})();
