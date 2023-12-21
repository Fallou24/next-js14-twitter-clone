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
  const validData = postSchema.safeParse({
    content: formData.get("content"),
  });
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
