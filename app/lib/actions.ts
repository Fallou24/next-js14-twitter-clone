"use server";
import { auth, currentUser } from "@clerk/nextjs";
import prisma from "./db";
import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { put } from "@vercel/blob";

const postSchema = z.object({
  content: z.string().min(1),
  postImg: z.string().optional(),
});

export async function createPost(formData: FormData) {
  const file = formData.get("file") as File;

  const filename: string = file.name;

  const user = await currentUser();
  let validData!: any;

  if (file.size > 0) {
    const blob = await put(filename, file, {
      access: "public",
    });

    validData = postSchema.safeParse({
      content: formData.get("content"),
      postImg: blob.url,
    });
  } else {
    validData = postSchema.safeParse({
      content: formData.get("content"),
    });
  }

  if (!user) {
    redirect("/sign-in");
  }
  if (validData.success) {
    const postData = {
      ...validData.data,
      userId: user.id,
      username: user.username!,
      fullName: user.firstName + " " + user.lastName,
      userImg: user.imageUrl,
    };

    try {
      await prisma.post.create({
        data: postData,
      });
    } catch (e) {
      console.log(e);
      throw new Error("Impossible de créer un post");
    }
    revalidatePath("/");
  }
}

//======================== Comment a post =================*/

export async function commentPost(parentId: string, formData: FormData) {
  const file = formData.get("file") as File;

  const filename: string = file.name;

  const user = await currentUser();
  let validData!: any;

  if (file.size > 0) {
    const blob = await put(filename, file, {
      access: "public",
    });

    validData = postSchema.safeParse({
      content: formData.get("content"),
      postImg: blob.url,
    });
  } else {
    validData = postSchema.safeParse({
      content: formData.get("content"),
    });
  }

  if (!user) {
    redirect("/sign-in");
  }
  if (validData.success) {
    const postData = {
      ...validData.data,
      userId: user.id,
      username: user.username!,
      fullName: user.firstName + " " + user.lastName,
      userImg: user.imageUrl,
      parentId,
    };

    try {
      await prisma.post.create({
        data: postData,
      });
    } catch (e) {
      console.log(e);
      throw new Error("Impossible de créer un post");
    }
    revalidatePath("/" + user.username + "/posts/" + parentId);
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
      userId: user.id,
    },
  });
  if (postStatus === 0) {
    try {
      await prisma.like.create({
        data: {
          postId,
          userId: user.id,
        },
      });
    } catch (e) {
      console.log(e);
      throw new Error("Impossible d'aimer cet article");
    }
  } else {
    try {
      await prisma.like.deleteMany({
        where: {
          userId: user.id,
          postId,
        },
      });
    } catch (e) {
      console.log(e);
      throw new Error("Impossible d'aimer cet article");
    }
  }

  revalidatePath("/");
}
