"use server";

import { revalidateTag } from "next/cache";
import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "@/db/drizzle/schemas";
import { eq } from "drizzle-orm";

export async function revalidateExampleAction(formData: FormData) {
    const path = formData.get("path") as string;
    console.log("validate example action called for path:", path);

    /*
    // Update the title so we can see a change
    await drizzleDb
        .update(postsTable)
        .set({
            title: `Rotina matinal de pessoas altamente eficazes (Updated ${new Date().toLocaleTimeString()})`,
            published: true,
        })
        .where(
            eq(postsTable.slug, "rotina-matinal-de-pessoas-altamente-eficazes"),
        );
    */

    //revalidatePath(path);
    revalidateTag("posts", "default"); // home
    revalidateTag(
        "post-rotina-matinal-de-pessoas-altamente-eficazes",
        "default",
    ); // single
}
