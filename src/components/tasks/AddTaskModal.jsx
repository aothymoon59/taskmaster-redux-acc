import Modal from "../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title='Programming Hero'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi error magni quos iste labore, id fugit mollitia sit! Officiis quod ab culpa perferendis. Excepturi in odio rerum? Nesciunt, exercitationem tenetur?</p>
        </Modal>
    );
};

export default AddTaskModal;