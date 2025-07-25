import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-respository";

const ROOT_DIR = process.cwd();
console.log("Root Directory:", ROOT_DIR);

export class JsonPostRepository implements PostRepository {
    private async readFromDisk() {}
    async findAll(): Promise<PostModel[]> {}
}

export const postRepository = new JsonPostRepository();
