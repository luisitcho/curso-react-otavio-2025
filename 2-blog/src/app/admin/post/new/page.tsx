import { Button } from "@/components/Button";
import { InputText } from "@/components/InputText";
import { BanIcon, BugIcon, CheckIcon } from 'lucide-react';

export const dynamic = "force-dynamic";

export default async function AdminPostNewPage() {
    return (
        <div className="container">
            <InputText
                labelText='Nome'
                placeholder='Digite seu nome'
                type='password'
            />
            <InputText labelText='Sobrenome' placeholder='Digite seu sobrenome' />
            <InputText
                disabled
                labelText='Sobrenome'
                placeholder='Digite seu sobrenome'
                defaultValue='Olá mundo'
            />
            <InputText
                disabled
                labelText='Sobrenome'
                placeholder='Digite seu sobrenome'
            />
            <InputText
                labelText='Sobrenome'
                placeholder='Digite seu sobrenome'
                readOnly
            />
            <InputText
                labelText='Sobrenome'
                placeholder='Digite seu sobrenome'
                defaultValue='Olá mundo'
                readOnly
            />
        </div>
    );
}