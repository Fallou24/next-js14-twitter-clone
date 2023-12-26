import { auth, useUser } from "@clerk/nextjs";
import prisma from "./db";
export async function getAllPost() {
  try {
    const posts = await prisma.post.findMany({
      where: {
        parent: null,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        _count: {
          select: {
            reply: true,
            likes: true,
          },
        },
      },
    });
    return posts;
  } catch (e) {
    console.log(e);
  }
}

export async function getPostById(id: string) {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
      include: {
        reply: true,

        _count: {
          select: {
            likes: true,
            reply: true,
          },
        },
      },
    });
    return post;
  } catch (e) {
    console.log(e);
    throw new Error("Impossible de recupérer l'article");
  }
}

export async function postLikeByUser(postId: string) {
  const { user } = auth();
  try {
    const result = await prisma.like.count({
      where: {
        username: user?.id,
        postId,
      },
    });
    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function getUserPost(username: string) {
  try {
    const posts = await prisma.post.findMany({
      where: {
        parent: null,
        username
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        _count: {
          select: {
            reply: true,
            likes: true,
          },
        },
      },
    });
    return posts;
  } catch (e) {
    console.log(e);
  }
}
