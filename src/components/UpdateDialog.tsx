import Modal from 'react-modal';
import UpdateTodoForm from './UpdateTodoForm';
import TodoItem from '../models/TodoItem';

Modal.setAppElement('#root');

interface PopupDialogProps {
    modalIsOpen: boolean,
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    todo: TodoItem
}

const UpdateDialog: React.FC<PopupDialogProps> = ({ modalIsOpen, setModalIsOpen, todo }) => {

  return (
    <Modal
      isOpen={modalIsOpen}
      contentLabel="Update TODO modal"
    >
      <UpdateTodoForm setModalIsOpen={setModalIsOpen}  todoItem={todo}/>
    </Modal>
  );
};

export default UpdateDialog;
