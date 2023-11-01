import {NextResponse} from "next/server";
import prisma from "@/lib/prismadb";

export const GET = async (req: Request, {params}: any) => {
  try {
    const catName = params.catName;
    const post = await prisma.category.findUnique({
      where: {catName},
      include: {posts: {include: {author: true}, orderBy: {createdAt: "desc"}}},
    });
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({error});
  }
};
