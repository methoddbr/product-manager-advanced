const { z } = require("zod");
const { CreateProductDto, UpdateProductDto } = require("../dto/product.dto");

export const createProductSchema = z.object({
  name: z.string().min(3),
  price: z.number().positive(),
  category: z.string().min(1),
});

export const updateProductSchema = createProductSchema.partial();

export function validateCreate(data: unknown): typeof CreateProductDto {
  return createProductSchema.parse(data);
}
export function validateUpdate(data: unknown): typeof UpdateProductDto {
  return updateProductSchema.parse(data);
}
