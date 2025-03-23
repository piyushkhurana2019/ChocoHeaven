import { NextResponse } from 'next/server'
import connectDB from '@/lib/db/mongodb'
import { Product } from '@/lib/db/models/Product'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    
    // Validate request body
    const { name, description, category, price, image } = body
    if (!name || !description || !category || !price || !image) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Connect to database
    await connectDB()

    // Create new product
    const product = await Product.create({
      name,
      description,
      category,
      price: parseFloat(price),
      image
    })

    return NextResponse.json(product, { status: 201 })
  } catch (error) {
    console.error('Error creating product:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Connect to database
    await connectDB()

    // Get all products
    const products = await Product.find({}).sort({ createdAt: -1 })

    return NextResponse.json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 