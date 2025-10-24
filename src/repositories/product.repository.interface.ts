import type { CreateProductDto, UpdateProductDto } from "../dto/product.dto";
import type { Product } from "../models/product.model";

export interface IProdcutRepository {
  findAll(): Promise<Product[]>;
  findById(id: number): Promise<Product | null>;
  create(data: CreateProductDto): Promise<Product>;
  update(id: number, data: UpdateProductDto): Promise<Product | null>;
  delete(id: number): Promise<boolean>;
}
