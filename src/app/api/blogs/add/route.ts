import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const body = await req.json();
    const { title, category, metaTitle, metaDescription, metaKeywords, image, shortDescription, isActive, isFeatured } = body;
    console.log(body, "BODYA>>>>>>>>>>>>")

    if (!title || !category || !metaTitle || !metaDescription) {
        return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const slug = title.toLowerCase().replace(/ /g, "-");

    try {
        const blog = await prisma.blog.create({
            data: {
                title,
                slug,
                category,
                metaTitle,
                metaDescription,
                metaKeywords,
                image,
                shortDescription,
                isActive: isActive ?? false,
                isFeatured: isFeatured ?? false,
            },
        });

        return NextResponse.json(blog, { status: 201 });
    } catch (error) {
        console.log(error, "eror>>>>>>>>>>>>>>>>")
        return NextResponse.json({ message: "Something went wrong", error }, { status: 500 });
    }
}
