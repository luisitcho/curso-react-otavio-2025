import { JsonPostRepository } from "./json-post-repository";
import { PostRepository } from "./post-respository";

export const postRepository: PostRepository = new JsonPostRepository();
