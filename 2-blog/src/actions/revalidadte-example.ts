"use server";

import { revalidatePath } from "next/cache";

export async function revalidateExampleAction(formData: FormData) {
    const path = formData.get('path') as string;
    console.log("validate example action called for path:", path);

    revalidatePath(path);
}
