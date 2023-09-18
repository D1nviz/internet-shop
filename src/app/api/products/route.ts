import Product from "@/components/models/product";
import connectMongoDB from "@/lib/mongodb";
import {NextResponse} from "next/server";


export async function POST(request:Request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Product.create({ title, description });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
};

export async function GET() {
  await connectMongoDB();
  const products = await Product.find();
  return NextResponse.json({products});
}