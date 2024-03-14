import Modal from "../ui/Modal";


const TasksDetailsModal = ({ isOpen, setIsOpen, singleTask }) => {
  const oncancel = () => {
    setIsOpen(false);
  };
  const onSubmit = () => {
    oncancel();
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero !">
      <div>
        <h2>Title: {singleTask.title}</h2>
        <p>Details: {singleTask.description}</p>
        <p>Date: {singleTask.date}</p>
        <p>AssignedTo: {singleTask.assignedTo}</p>
        <p>Priority: {singleTask.priority}</p>
        <p>Status: {singleTask.status}</p>
      </div>
      <div className="flex gap-3 justify-end">
        <button onClick={oncancel} type="button" className="btn bg-red-400">
          Cencel
        </button>
        <button onClick={onSubmit} className="btn bg-primary">
          Submit
        </button>
      </div>
    </Modal>
  );
};

export default TasksDetailsModal;