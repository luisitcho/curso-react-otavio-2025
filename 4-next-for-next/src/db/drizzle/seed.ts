import { JsonPostRepository } from "@/repositories/post/json-post-repository";
import { drizzleDb } from ".";
import { postsTable } from "./schemas";

(async () => {
    const jsonPostRepository = new JsonPostRepository();
    const posts = await jsonPostRepository.findAll(); // Mudei para findAll para trazer rascunhos

    try {
        await drizzleDb.delete(postsTable); // LIMPA A BASE DE DADOS
        await drizzleDb.insert(postsTable).values(posts);
        console.log("Banco de dados sincronizado com o JSON!");
    } catch (error) {
        console.log("Ocorreu um erro ", error);
    }
})();
