import Link from "next/link";
import { Container } from "../Container";

export function Footer() {
    return (
        <footer className="footer mt-auto py-10">
            <Container>
                <p className="text-center">
                    <span>Copyright &copy; {new Date().getFullYear()} - </span>
                    <Link href="/">The Blog</Link>
                </p>
            </Container>
        </footer>
    );
}
