import Modal from 'react-modal';

interface NewTransacationModalProps {
    isOpen: boolean;
    onRequestClose: () => void; 
}

    export function NewTransactionModal({ isOpen , onRequestClose }: NewTransacationModalProps ){
    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
    );
}