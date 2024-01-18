import { auth, currentUser, useUser } from "@clerk/nextjs";
import { unstable_noStore as noStore } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";
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
      orderBy: {
        createdAt: "desc",
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
    throw new Error("Impossible d'avoir les posts aimé par " + username);
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

export async function isFollowed(id: string) {
  noStore();
  const user = await currentUser();
  try {
    const res = await prisma.follows.findMany({
      where: {
        followerId: user?.id,
        followingId: id,
      },
    });
    return !!res.length;
  } catch (e) {
    console.log(e);
  }
}

export async function getSearchResult(query: string) {
  try {
    const data = await prisma.profile.findMany({
      where: {
        fullName: {
          contains: query,
          mode: "insensitive",
        },
        username: {
          contains: query,
          mode: "insensitive",
        },
      },
    });
    return data;
  } catch (e) {
    console.log(e);
    throw new Error("Impossible de recupérer le resultat des recherches");
  }
}

export async function getUserToSuggest() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }
  const userInfo = await prisma.profile.findUnique({
    where: {
      id: user?.id,
    },
    include: {
      follower: true,
    },
  });

  const followedUserIds = userInfo?.follower.map(
    (follower) => follower.followingId
  );
  const ids = followedUserIds ? [user.id, ...followedUserIds] : [user.id];

  try {
    const data = await prisma.profile.findMany({
      where: {
        id: {
          notIn: ids,
        },
      },
      orderBy: {
        following: {
          _count: "desc",
        },
      },
      take: 3,
    });
    return data;
  } catch (e) {
    console.log(e);
    throw new Error("Impossible de recupérer les utilisateurs");
  }
}

export async function getUserFollowers(username: string) {
  const user = await prisma.profile.findUnique({
    where: { username },
    select: { id: true },
  });
  try {
    const data = await prisma.follows.findMany({
      where: {
        followingId: user?.id,
      },
      select: {
        follower: true,
      },
    });
    return data.map((user) => user.follower);
  } catch (e) {
    console.log(e);
  }
}

export async function getUserFollowings(username: string) {
  const user = await prisma.profile.findUnique({
    where: { username },
    select: { id: true },
  });
  try {
    const data = await prisma.follows.findMany({
      where: {
        followerId: user?.id,
      },
      select: {
        following: true,
      },
    });
    return data.map((user) => user.following);
  } catch (e) {
    console.log(e);
  }
}
