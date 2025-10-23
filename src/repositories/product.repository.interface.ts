const { CreateProductDto, UpdateProductDto } = require("../dto/product.dto");
const { Product } = require("../models/product.model");

export interface IProdcutRepository {
  findAll(): Promise<(typeof Product)[]>;
  findById(id: number): Promise<typeof Product | null>;
  create(data: typeof CreateProductDto): Promise<typeof Product>;
  update(
    id: number,
    data: typeof UpdateProductDto
  ): Promise<typeof Product | null>;
  delete(id: number): Promise<boolean>;
}
