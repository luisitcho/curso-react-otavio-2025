"use server";

export async function revalidateExampleAction(formData: FormData) {
    const path = formData.get('path') as string;
    console.log("validate example action called for path:", path);
}
