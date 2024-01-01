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
        profile: true,
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
        profile: true,
        reply: {
          include: {
            profile: true,
          },
        },

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
        profileId: user?.id,
        postId,
      },
    });
    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function getUserPost(username: string) {
  const currentUser = await prisma.profile.findUnique({
    where: {
      username,
    },
  });
  try {
    const posts = await prisma.post.findMany({
      where: {
        parent: null,
        profileId: currentUser?.id,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        profile: true,
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

export async function getUserLikes(username: string) {
  const currentUser = await prisma.profile.findUnique({
    where: {
      username,
    },
  });
  try {
    const posts = await prisma.like.findMany({
      where: {
        profileId: currentUser?.id,
      },
      select: {
        profile: true,
        post: {
          select: {
            id: true,
            postImg: true,
            content: true,
            _count: {
              select: {
                reply: true,
                likes: true,
              },
            },
          },
        },
      },
    });
    return posts.map((post) => ({
      profile: post.profile,
      ...post.post,
    }));
  } catch (e) {
    console.log(e);
  }
}

export async function getUserPostCount(username: string) {
  const currentUser = await prisma.profile.findUnique({
    where: {
      username,
    },
  });
  try {
    const count = prisma.post.count({
      where: {
        profileId: currentUser?.id,
      },
    });
    return count;
  } catch (e) {
    console.log(e);
  }
}
