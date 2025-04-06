import { Container } from '../../components/Container';
import { ContDown } from '../../components/ContDown';
import { Form } from '../../components/Form';
import { TaskStateModel } from '../../models/TaskStateModel';
import { MainTemplate } from '../../templates/MainTemplate';

type HomeProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function Home(props: HomeProps) {
    const { state, setState } = props;

    function handleClick() {
        setState(prevState => {
            return {
                ...prevState,
                currentCycle: 5,
            };
        });
    }
    return (
        <MainTemplate>
            <Container>
                <button onClick={handleClick}>Clicar</button>
                <ContDown />
            </Container>

            <Container>
                <Form />
            </Container>
        </MainTemplate>
    );
}
