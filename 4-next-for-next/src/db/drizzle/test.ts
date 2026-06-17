/*
import { eq } from "drizzle-orm";
import { drizzleDb } from ".";
import { postsTable } from "./schemas";

(async () => {
    await drizzleDb
        .update(postsTable)
        .set({
            title: "Rotina matinal de pessoas altamente eficazes",
            published: false,
        })
        .where(
            eq(postsTable.slug, "rotina-matinal-de-pessoas-altamente-eficazes"),
        );

    //const posts = await drizzleDb.select().from(postsTable);
    //posts.forEach((post) => {
    //   console.log("Post:", post.slug);
    //});
})();
*/
