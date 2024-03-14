import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TasksDetailsModal from './TasksDetailsModal';
import { myWorkStatus } from '../../redux/features/tasks/tasksSlice';

const MyTasks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [singleTask, setSingleTask] = useState({});
  const dispatch = useDispatch();
  // const item = {
  //   id: 1,
  //   status: 'pending',
  //   title: 'Remove Button',
  //   description:
  //     'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
  //   date: '2023-08-28',
  //   assignedTo: 'Mir Hussain',
  //   priority: 'high',
  // };

  const {tasks} = useSelector((state)=>state.tasksSlice);

  const openModal = (id)=>{
    // console.log("id", id);
    const singleItem = tasks.find((single)=>single.id === id);
    setSingleTask(singleItem);
    setIsOpen(!isOpen);

  }

  

  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {tasks.map((item) => (
          <div
            key={item.id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1>{item.title}</h1>
            <div className="flex gap-3">
              <button
                onClick={() => openModal(item.id)}
                className="grid place-content-center"
                title="Details"
              >
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>

              <button
                onClick={() =>
                  dispatch(myWorkStatus({ id: item.id, status: "done" }))
                }
                className="grid place-content-center"
                title="Done"
              >
                <CheckIcon className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <TasksDetailsModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        singleTask={singleTask}
      />
    </div>
  );
};

export default MyTasks;
