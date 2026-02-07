"use server";

import { revalidateTag } from "next/cache";

export async function revalidateExampleAction(formData: FormData) {
    const path = formData.get("path") as string;
    console.log("validate example action called for path:", path);

    //revalidatePath(path);
    //revalidateTag("random-user", "default");
    revalidateTag("formatHourCached", "default");
}
