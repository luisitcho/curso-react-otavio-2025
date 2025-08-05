import { JsonPostRepository } from "@/repositories/post/json-post-repository";
import { drizzleDb } from ".";
import { postsTable } from "./schemas";

(async () => {
    const jsonPostRepository = new JsonPostRepository();
    const posts = await jsonPostRepository.findAllPublic();

    try {
        await drizzleDb.delete(postsTable); // LIMPA A BASE DE DADOS
        await drizzleDb.insert(postsTable).values(posts);
    } catch (error) {
        console.log("Ocorreu um erro ", error);
    }
})();
