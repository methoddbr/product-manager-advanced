import { PrismaClient } from "@prisma/client";
import type { IProdcutRepository } from "./product.repository.interface";
import type { CreateProductDto, UpdateProductDto } from "../dto/product.dto";
import type { Product } from "../models/product.model";

const prisma = new PrismaClient();

export class PrismaProductRepository implements IProdcutRepository {
  async findAll(): Promise<Product[]> {
    return prisma.product.findMany({ orderBy: { id: "desc" } });
  }

  async findById(id: number): Promise<Product | null> {
    return prisma.product.findUnique({ where: { id } });
  }

  async create(data: CreateProductDto): Promise<Product> {
    return prisma.product.create({ data });
  }

  async update(id: number, data: UpdateProductDto): Promise<Product | null> {
    try {
      return await prisma.product.update({ where: { id }, data });
    } catch {
      return null;
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      await prisma.product.delete({ where: { id } });
      return true;
    } catch {
      return false;
    }
  }
}
