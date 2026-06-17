'use client';

import { Button } from "../Button";
import { CheckIcon, XIcon } from "lucide-react";

type DialogProps = {
    isVisible?: boolean;
    title: string;
    content: string;
    disabled?: boolean;
    onConfirm?: () => void;
    onCancel?: () => void;
};

export function Dialog({
    isVisible = false,
    title,
    content,
    disabled = false,
    onConfirm,
    onCancel,
}: DialogProps) {
    if (!isVisible) return null;

    function handleCancel() {
        if (disabled) return;
        onCancel?.();
    }

    function handleConfirm() {
        if (disabled) return;
        onConfirm?.();
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs"
            onClick={handleCancel}
        >
            <div
                className="mx-6 flex max-w-2xl flex-col gap-6 rounded-lg bg-slate-100 p-6 text-center shadow-lg shadow-black/30"
                role="dialog"
                aria-modal="true"
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
                onClick={(e) => e.stopPropagation()}
            >
                <h3
                    id="dialog-title"
                    className="text-xl font-extrabold text-slate-700"
                >
                    {title}
                </h3>

                <div id="dialog-description" className="text-slate-700">
                    {content}
                </div>

                <div className="flex gap-4 justify-center">
                    <Button
                        variant="ghost"
                        disabled={disabled}
                        onClick={handleCancel}
                        icon={XIcon}
                        className="min-w-35"
                        autoFocus
                    >
                        Cancelar
                    </Button>

                    <Button
                        variant="default"
                        disabled={disabled}
                        onClick={handleConfirm}
                        icon={CheckIcon}
                        className="min-w-35"
                    >
                        Ok
                    </Button>
                </div>
            </div>
        </div>
    );
}