import { Bounce, ToastContainer } from 'react-toastify';

type MessageProps = {
    children?: React.ReactNode;
};
export function Messages({ children }: MessageProps) {
    return (
        <>
            {children}

            <ToastContainer
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
                transition={Bounce}
            />
        </>
    );
}
