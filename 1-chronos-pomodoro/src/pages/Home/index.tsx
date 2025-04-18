import { Container } from '../../components/Container';
import { ContDown } from '../../components/ContDown';
import { Form } from '../../components/Form';
import { MainTemplate } from '../../templates/MainTemplate';

export function Home() {
    return (
        <MainTemplate>
            <Container>
                <ContDown />
            </Container>

            <Container>
                <Form />
            </Container>
        </MainTemplate>
    );
}
