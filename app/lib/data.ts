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
