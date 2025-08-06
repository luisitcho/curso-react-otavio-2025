import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-respository";
import { readFile } from "fs/promises";
import { resolve } from "path";

export class JsonPostRepository implements PostRepository {}
