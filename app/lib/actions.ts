"use server";
import { auth, currentUser } from "@clerk/nextjs";

import prisma from "./db";
import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const postSchema = z.object({
  content: z.string().min(1),
});

export async function createPost(formData: FormData) {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }
  const validData = postSchema.safeParse({
    content: formData.get("content"),
  });

  if (validData.success) {
    try {
      await prisma.post.create({
        data: {
          ...validData.data,
          profileId: user.id,
        },
      });
      revalidatePath("/");
    } catch (e) {
      console.log(e);
      throw new Error("Impossible de créer un post");
    }
  }
}

//======================== Comment a post =================*/

export async function commentPost(parentId: string, formData: FormData) {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }
  const validData = postSchema.safeParse({
    content: formData.get("content"),
  });

  if (validData.success) {
    try {
      await prisma.post.create({
        data: {
          ...validData.data,
          profileId: user.id,
          parentId,
        },
      });
      revalidatePath("/");
    } catch (e) {
      console.log(e);
      throw new Error("Impossible de commenter un post");
    }
  }
}

export async function likePost(postId: string) {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }
  const postStatus = await prisma.like.count({
    where: {
      postId,
      profileId: user.id,
    },
  });
  if (postStatus === 0) {
    try {
      await prisma.like.create({
        data: {
          postId,
          profileId: user.id,
        },
      });
      revalidatePath("/");
    } catch (e) {
      console.log(e);
      throw new Error("Impossible d'aimer cet article");
    }
  } else {
    try {
      await prisma.like.deleteMany({
        where: {
          postId,
          profileId: user.id,
        },
      });
      revalidatePath("/");
    } catch (e) {
      console.log(e);
      throw new Error("Impossible d'aimer cet article");
    }
  }
}

export async function followUser(id: string) {
  const user = await currentUser();
  const res = await prisma.follows.findMany({
    where: {
      followerId: user?.id!,
      followingId: id,
    },
  });
  if (res.length >= 1) {
    await prisma.follows.deleteMany({
      where: {
        followerId: user?.id!,
        followingId: id,
      },
    });
  } else {
    try {
      await prisma.follows.create({
        data: {
          followerId: user?.id!,
          followingId: id,
        },
      });
    } catch (e) {
      console.log(e);
      throw new Error("Impossible de suivre ce profile");
    }
  }
  revalidatePath("/");
}

export async function startConversation(recipientId: string) {
  const user = await currentUser();

  try {
    if (user) {
      const conversation = await prisma.conversation.findFirst({
        where: {
          OR: [
            { participant1Id: user.id, participant2Id: recipientId },
            { participant1Id: recipientId, participant2Id: user.id },
          ],
        },
      });
      if (!conversation) {
        const newConv = await prisma.conversation.create({
          data: {
            participant1Id: user.id,
            participant2Id: recipientId,
          },
        });
        revalidatePath("/messages");
        return newConv;
       
      }
    }
  } catch (e) {
    console.log(e);
  }
}
