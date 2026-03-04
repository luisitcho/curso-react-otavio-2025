import { Button } from "@/components/Button";

export const dynamic = "force-dynamic";

export default async function AdminPostNewPage() {
    return (
        <div className="flex h-screen items-center justify-center">
            <Button className="cursor-pointer">Click me</Button>
        </div>
    );
}