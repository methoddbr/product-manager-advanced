export type CreateProductDto = {
  name: string;
  price: number;
  category: string;
};

export type UpdateProductDto = partial<CreateProductDto>;
