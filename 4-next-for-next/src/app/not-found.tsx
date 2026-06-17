import { Container } from "@/components/Container";
import { ErrorMessage } from "@/components/ErrorMessage";

export default function NotFound() {
    return (
        <div className="notFound">
            <Container>
                <ErrorMessage 
                    pageTitle="Página não encontrada"
                    contentTitle="404"
                    content="Erro 404 - A página que você está tentando acessar não existe neste site."
                />
            </Container>
        </div>
    );
}
