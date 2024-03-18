import { ReactElement } from 'react';

export interface DateModalProps {
    modalIsOpen: boolean;
    closeModal: () => void;
    Inputs: ReactElement;
    onApply: () => void;
}