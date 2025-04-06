import { Container } from '../../components/Container';
import { ContDown } from '../../components/ContDown';
import { Form } from '../../components/Form';
import { TaskStateModel } from '../../models/TaskStateModel';
import { MainTemplate } from '../../templates/MainTemplate';

export type HomeProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function Home(props: HomeProps) {
    return (
        <MainTemplate>
            <Container>
                <ContDown {...props} />
            </Container>

            <Container>
                <Form {...props} />
            </Container>
        </MainTemplate>
    );
}
