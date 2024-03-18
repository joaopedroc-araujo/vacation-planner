import { ReactElement } from 'react';

export interface DateModalProps {
    modalIsOpen: boolean;
    Inputs: ReactElement;
    onApply: () => void;
}