import { auth, currentUser, useUser } from "@clerk/nextjs";
import { unstable_noStore as noStore } from "next/cache";
import prisma from "./db";
export async function getAllPost() {
  noStore();
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
  noStore();
  try {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },

      include: {
        profile: true,

        reply: {
          orderBy: {
            createdAt: "desc",
          },
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
  noStore();
  const user = await currentUser();
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
  noStore();
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
  noStore();
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
      orderBy:{
        createdAt:"desc"
      },
      select: {
        post: {
          select: {
            profile: true,
            id: true,
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
    return posts.map((post) => post.post);
  } catch (e) {
    console.log(e);
  }
}

export async function getProfileInfo(username: string) {
  noStore();
  try {
    const currentUser = await prisma.profile.findUnique({
      where: {
        username,
      },
      include: {
        _count: {
          select: {
            follower: true,
            following: true,
            post: true,
          },
        },
      },
    });
    return currentUser;
  } catch (e) {
    console.log(e);
  }
}
