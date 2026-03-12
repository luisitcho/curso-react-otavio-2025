import { useId } from 'react';

type InputTextProps = {
    labelText?: string;
} & React.ComponentProps<'input'>;

export function InputText({ labelText = '', ...props }: InputTextProps) {
    const id = useId();

    return (
        <div className="flex flex-col gap-2">
            {labelText && (
                <label className="text-sm" htmlFor={id}>
                    {labelText}
                </label>
            )}
            <input
                {...props}
                className={
                    'bg-white text-slate-900 outline-none text-base/tight ' +
                    'ring-1 ring-slate-300 rounded ' +
                    'p-2 transition focus:ring-2 focus:ring-blue-600 ' +
                    'placeholder-slate-400 ' +
                    'disabled:bg-slate-200 ' +
                    'disabled:text-slate-400 ' +
                    'disabled:placeholder-slate-300 ' +
                    'read-only:bg-slate-100 ' +
                    (props.className || '')
                }
                id={id}
            />
        </div>
    );
}