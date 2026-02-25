'use client';

type DialogProps = {
    isVisible?: boolean;
    title: string;
    content: string;
    disabled: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

export function Dialog({ isVisible = false, title, content, disabled, onConfirm, onCancel }: DialogProps) {
    if (!isVisible) return null;

    function handleCancel() {
        if (disabled) return;

        onCancel();
    }

    return (
        <div
            className='fixed z-50 inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center'
            onClick={handleCancel}

        >
            <div
                className='bg-slate-100 p-6 rounded-lg max-w-2xl mx-6 flex flex-col gap-6 shadow-lg shadow-black/30 text-center'
                role='dialog'
                aria-modal={true}
                aria-labelledby='dialog-title'
                aria-describedby='dialog-description'
                onClick={e => e.stopPropagation()}
            >
                <h3 id='dialog-title' className='text-xl text-slate-700 font-extrabold'>{title}</h3>
                <div id='dialog-description' className="text-slate-700">{content}</div>
                <div className='flex items-center justify-around'>
                    <button
                        className='
                        bg-slate-200 hover:bg-slate-300 transition text-slate-950 flex items-center justify-center py-2 px-4 rounded-lg cursor-pointer disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed'
                        disabled={disabled}
                        onClick={handleCancel}
                        autoFocus

                    >
                        Cancelar
                    </button>

                    <button
                        className='bg-blue-500 hover:bg-blue-600 transition text-blue-50 flex items-center justify-center py-2 px-4 rounded-lg cursor-pointer disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed'
                        disabled={disabled}
                        onClick={onConfirm}
                    >
                        Ok
                    </button>
                </div>
            </div>
        </div>
    )
}