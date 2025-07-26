import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-respository";
import { readFile } from "fs/promises";
import { resolve } from "path";

const ROOT_DIR = process.cwd();
const JSON_POSTS_PATH = resolve(ROOT_DIR, "src", "db", "seed", "posts.json");
export class JsonPostRepository implements PostRepository {
    private async readFromDisk() {
        const json = await readFile(JSON_POSTS_PATH, "utf-8");
        const jsonParsed = JSON.parse(json);
        const { posts } = jsonParsed;

        return posts;
    }

    async findAll(): Promise<PostModel[]> {
        const posts = await this.readFromDisk();

        return posts;
    }

    async findById(id: string): Promise<PostModel> {
        const posts = await this.findAll();
        const post = posts.find((post) => post.id === id);

        if (!post) throw new Error("Post not found");

        return post;
    }
}

export const postRepository: PostRepository = new JsonPostRepository();
