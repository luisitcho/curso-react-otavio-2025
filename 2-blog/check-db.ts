import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "@/db/drizzle/schemas";
import { eq } from "drizzle-orm";

async function checkDrafts() {
    const allPosts = await drizzleDb.select().from(postsTable);
    console.log("Total de posts no banco:", allPosts.length);
    const drafts = allPosts.filter(p => !p.published);
    console.log("Total de rascunhos:", drafts.length);

    if (drafts.length === 0 && allPosts.length > 0) {
        console.log("Nenhum rascunho encontrado. Vou transformar o primeiro post em rascunho para teste...");
        await drizzleDb.update(postsTable)
            .set({ published: false })
            .where(eq(postsTable.id, allPosts[0].id));
        console.log(`Post ${allPosts[0].id} agora é um rascunho.`);
    }
}

checkDrafts().catch(console.error);
