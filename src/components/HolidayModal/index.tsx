import Modal from 'react-modal';
import { DateModalProps } from './interface';

const DateModal = ({ modalIsOpen, closeModal, Inputs, onApply }: DateModalProps) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Inputs Modal"
        >
            {Inputs}
            <button onClick={onApply}>Aplicar</button>
        </Modal>
    );
};

export default DateModal;
