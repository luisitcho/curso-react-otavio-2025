import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";
import { SIMULATE_AWAIT } from "@/lib/constants";


const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json',
);

export class JsonPostRepository implements PostRepository {
    private async simulateAwait() {
        if (SIMULATE_AWAIT <= 0) return;

        await new Promise((resolve) => setTimeout(resolve, SIMULATE_AWAIT));
    }

    private async readFromDisk() {
        const json = await readFile(JSON_POSTS_FILE_PATH, "utf-8");
        const jsonParsed = JSON.parse(json);
        const { posts } = jsonParsed;

        return posts;
    }

    private async writeToDisk(posts: PostModel[]): Promise<void> {
        const jsonToString = JSON.stringify({ posts }, null, 2);
        await writeFile(JSON_POSTS_FILE_PATH, jsonToString, 'utf-8');
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


    async create(post: PostModel): Promise<PostModel> {
        const posts = await this.findAll();

        if (!post.id || !post.slug) {
            throw new Error('Post sem ID ou Slug');
        }

        const idOrSlugExist = posts.find(
            savedPost => savedPost.id === post.id || savedPost.slug === post.slug,
        );

        if (idOrSlugExist) {
            throw new Error('ID ou Slug devem ser únicos');
        }

        posts.push(post);
        await this.writeToDisk(posts);

        return post;
    }

    async delete(id: string): Promise<PostModel> {
        const posts = await this.findAll();
        const postIndex = posts.findIndex(p => p.id === id);

        if (postIndex < 0) {
            throw new Error('Post não existe');
        }

        const post = posts[postIndex];
        posts.splice(postIndex, 1);
        await this.writeToDisk(posts);

        return post;
    }

    async update(
        id: string,
        newPostData: Omit<PostModel, 'id' | 'slug' | 'createdAt' | 'updatedAt'>,
    ): Promise<PostModel> {
        const posts = await this.findAll();
        const postIndex = posts.findIndex(p => p.id === id);
        const savedPost = posts[postIndex];

        if (postIndex < 0) {
            throw new Error('Post não existe');
        }

        const newPost = {
            ...savedPost,
            ...newPostData,
            updatedAt: new Date().toISOString(),
        };
        posts[postIndex] = newPost;
        await this.writeToDisk(posts);
        return newPost;
    }
}
