'use client';

import { Bounce, ToastContainer } from "react-toastify";

export function ToastifyContainer() {
    return (
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
        />
    );
}