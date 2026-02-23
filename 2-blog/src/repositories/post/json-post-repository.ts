import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { readFile } from "fs/promises";
import { resolve } from "path";
import { SIMULATE_AWAIT } from "@/lib/constants";

const ROOT_DIR = process.cwd();
const JSON_POSTS_PATH = resolve(ROOT_DIR, "src", "db", "seed", "posts.json");
export class JsonPostRepository implements PostRepository {
    private async simulateAwait() {
        if (SIMULATE_AWAIT <= 0) return;

        await new Promise((resolve) => setTimeout(resolve, SIMULATE_AWAIT));
    }

    private async readFromDisk() {
        const json = await readFile(JSON_POSTS_PATH, "utf-8");
        const jsonParsed = JSON.parse(json);
        const { posts } = jsonParsed;

        return posts;
    }

    async findAllPublic(): Promise<PostModel[]> {
        await this.simulateAwait();

        const posts = await this.readFromDisk();

        return posts.filter((post: PostModel) => post.published);
    }

    async findAll(): Promise<PostModel[]> {
        await this.simulateAwait();

        const posts = await this.readFromDisk();

        return posts;
    }

    async findById(id: string): Promise<PostModel> {
        await this.simulateAwait();

        const posts = await this.readFromDisk();
        const post = posts.find((post: PostModel) => post.id === id);

        if (!post) throw new Error("Post not found for ID");

        return post;
    }

    async findBySlugPublic(slug: string): Promise<PostModel> {
        await this.simulateAwait();

        const posts = await this.readFromDisk();
        const post = posts.find(
            (post: PostModel) => post.slug === slug && post.published,
        );

        if (!post) throw new Error("Post not found for slug");

        return post;
    }
}
