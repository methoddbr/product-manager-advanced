import type { IProdcutRepository } from "../repositories/product.repository.interface";
import { CreateProductDto, UpdateProductDto } from "../dto/product.dto";
import { Product } from "../models/product.model";

export class ProductService {
  constructor(private repository: IProdcutRepository) {}

  async listAll(): Promise<Product[]> {
    return this.repository.findAll();
  }

  async getById(id: number): Promise<Product> {
    const product = await this.repository.findById(id);
    if (!product) throw new Error("Product not found");
    return product;
  }

  async create(data: CreateProductDto): Promise<Product> {
    return this.repository.create(data);
  }

  async update(id: number, data: UpdateProductDto): Promise<Product> {
    const updated = await this.repository.update(id, data);
    if (!updated) throw new Error("Product not found");
    return updated;
  }

  async remove(id: number): Promise<void> {
    const deleted = await this.repository.delete(id);
    if (!deleted) throw new Error("Product not found");
  }
}
