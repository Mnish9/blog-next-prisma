import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);

        // Filters and search
        const isActive = searchParams.get('isActive');
        const isFeatured = searchParams.get('isFeatured');
        const category = searchParams.get('category');
        const search = searchParams.get('search');
        const metaKeywords = searchParams.get('metaKeywords');
        const id = searchParams.get('id');
        const slug = searchParams.get('slug');

        // Pagination
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '10');
        const skip = (page - 1) * limit;

        // Fetch a specific blog by ID or slug
        if (id) {
            const blog = await prisma.blog.findUnique({
                where: { id },
            });
            if (!blog) return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
            return NextResponse.json(blog, { status: 200 });
        }

        if (slug) {
            const blog = await prisma.blog.findUnique({
                where: { slug },
            });
            if (!blog) return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
            return NextResponse.json(blog, { status: 200 });
        }

        // Build dynamic filter conditions
        const where: any = {};
        if (isActive !== null) where.isActive = isActive === 'true';
        if (isFeatured !== null) where.isFeatured = isFeatured === 'true';
        if (category) where.category = category;
        if (metaKeywords) {
            where.metaKeywords = {
                hasSome: metaKeywords.split(','), // Match any of the provided keywords
            };
        }
        if (search) {
            where.OR = [
                { title: { contains: search, mode: 'insensitive' } },
                { shortDescription: { contains: search, mode: 'insensitive' } },
            ];
        }

        // Fetch blogs with filters, sorting, and pagination
        const blogs = await prisma.blog.findMany({
            where,
            orderBy: {
                category: 'asc', // Sort by category
            },
            skip,
            take: limit,
        });

        // Get total count for pagination
        const total = await prisma.blog.count({ where });

        return NextResponse.json(
            {
                blogs,
                total,
                page,
                limit,
            },
            { status: 200 }
        );
    } catch (error) {
        console.log(error, "eror>>>>>>>>>>>>>>>>")
        return NextResponse.json({ message: "Something went wrong", error }, { status: 500 });
    }
}
