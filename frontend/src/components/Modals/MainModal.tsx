import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../services/store';
import { closeModal } from '../../services/uiSlice';
import { Modal } from 'react-bootstrap';
import { Add } from './Add';
import { Edit } from './Edit';
import { Delete } from './Delete';

const variants = {
  add: Add,
  edit: Edit,
  delete: Delete,
};

export const MainModal = () => {
  const dispatch = useDispatch();
  const isOpened = useSelector((state: RootState) => state.ui.modal.isOpened);
  const modalType = useSelector((state: RootState) => state.ui.modal.type);

  const handleCloseModal = () => dispatch(closeModal());

  const Component = modalType ? variants[modalType] : null;

  return (
    <Modal show={isOpened} onHide={handleCloseModal} centered>
      {Component && <Component closeModal={handleCloseModal} />}
    </Modal>
  );
};
