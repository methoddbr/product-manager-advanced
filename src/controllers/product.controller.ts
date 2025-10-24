const { Request, Response, NextFunction } = require("express");
const { ProductService } = require("../services/product.service");
const {
  PrismaProductRepository,
} = require("../repositories/prisma-product.repository");
const {
  validateCreate,
  validateUpdate,
} = require("../validators/product.validators");

const repository = new PrismaProductRepository();
const service = new ProductService(repository);

export class ProductController {
  static async list(
    req: typeof Request,
    res: typeof Response,
    next: typeof NextFunction
  ) {
    try {
      const products = await service.listAll();
      res.json(products);
    } catch (err) {
      next(err);
    }
  }

  static async get(
    req: typeof Request,
    res: typeof Response,
    next: typeof NextFunction
  ) {
    try {
      const id = Number(req.params.id);
      const product = await service.getById(id);
      res.json(product);
    } catch (err) {
      next(err);
    }
  }

  static async create(
    req: typeof Request,
    res: typeof Response,
    next: typeof NextFunction
  ) {
    try {
      const payload = validateCreate(req.body);
      const created = await service.create(payload);
      res.status(201).json(created);
    } catch (err) {
      next(err);
    }
  }

  static async update(
    req: typeof Request,
    res: typeof Response,
    next: typeof NextFunction
  ) {
    try {
      const id = Number(req.params.id);
      const payload = validateUpdate(req.body);
      const updated = await service.update(id, payload);
      res.json(updated);
    } catch (err) {
      next(err);
    }
  }

  static async remove(
    req: typeof Request,
    res: typeof Response,
    next: typeof NextFunction
  ) {
    try {
      const id = Number(req.params.id);
      await service.remove(id);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}
