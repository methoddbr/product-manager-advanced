import { beforeAll, afterAll, describe, it, expect } from "@jest/globals";
const request = require("supertest");
const app = require("../app");
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

beforeAll(async () => {
  await prisma.product.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe("Products API (e2e)", () => {
  let productId: number;

  it("should create a product", async () => {
    const res = await request(app)
      .post("/products")
      .send({ name: "TV", price: 1200, category: "Electronics" });
    expect(res.status).toBe(201);
    productId = res.body.id;
  });

  it("should list products", async () => {
    const res = await request(app).get("/products");
    expect(res.status).toBe(200);
  });

  it("should get product by id", async () => {
    const res = await request(app).get(`/products/${productId}`);
    expect(res.status).toBe(200);
  });

  it("should update product", async () => {
    const res = await request(app)
      .put(`/products/${productId}`)
      .send({ price: 999 });
    expect(res.status).toBe(200);
  });

  it("should delete product", async () => {
    const res = await request(app).delete(`/products/${productId}`);
    expect(res.status).toBe(204);
  });
});
