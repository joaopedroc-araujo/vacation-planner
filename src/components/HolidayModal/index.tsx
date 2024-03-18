import { Modal, Button } from 'react-bootstrap';
import { DateModalProps } from './interface';

const DateModal = ({ modalIsOpen, closeModal, Inputs, onApply }: DateModalProps) => {
    return (
        <Modal dialogClassName="modal-dialog-scrollable"
            show={modalIsOpen}
            onHide={onApply}
            centered={true}
            animation={true}
        >
            <Modal.Header
                className='d-flex flex-column justify-content-center'
            >
                <Modal.Title>Modal Title</Modal.Title>
            </Modal.Header>
            <Modal.Body
                className='d-flex flex-column justify-content-center'>
                {Inputs}
            </Modal.Body>
            <Modal.Footer
                className='d-flex justify-content-center'
            >
                <Button
                    variant="secondary"
                    onClick={onApply}
                    disabled={!Inputs}
                    className='d-flex justify-content-center'
                >
                    Apply
                </Button>
            </Modal.Footer>
        </Modal >
    );
};

export default DateModal;