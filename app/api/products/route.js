import prismadb from "lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req) {
  const res = await req.json();
  console.log(res);
  const productInfo = await prismadb.product.create({
    data: {
      productName: res.name,
      productPrice: res.price,
      productDescription: res.description,
      productCategory: res.category,
    },
  });
  return NextResponse.json("ok", productInfo);
}
export async function GET() {
  return NextResponse.json(await prismadb.product.findMany());
}
export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (id) {
    await prismadb.product.delete({
      where: { id },
    });
  }
  return NextResponse.json("OK");
}
