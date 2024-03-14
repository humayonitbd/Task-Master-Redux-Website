import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";



const AddTaskModal = ({isOpen,setIsOpen}) => {
     const {
       register,
       handleSubmit
    
     } = useForm();
     const onSubmit = (data) => {
        console.log(data);
     }
    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero !">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3">
            <label htmlFor="title">Title</label>
            <input
              className="w-full rounded-md"
              type="text"
              id="title"
              {...register("name")}
            />
            <button type="submit">Submit</button>
          </div>
          <div>
            <label htmlFor="title" className="mb-2">
              Description
            </label>
            <textarea
              className="w-full rounded-md"
              type="text"
              id="description"
              {...register("description")}
            ></textarea>
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Deadline
            </label>
            <input
              className="w-full rounded-md"
              type="date"
              id="date"
              {...register("date")}
            ></input>
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Assign to
            </label>
            <select
              className="w-full rounded-md"
              id="assignedTo"
              {...register("assignedTo")}
            >
              <option value="Humayon Forid">Humayon Forid</option>
              <option value="Nabil Hossen">Nabil Hossen</option>
              <option value="Mahfuz Alam">Mahfuz Alam</option>
              <option value="Liman Shikdar">Liman Shikdar</option>
              <option value="Fahim Ahmed">Fahim Ahmed</option>
              <option value="Mamun Hossen">Mamun Hossen</option>
              <option value="Kanon Huda">Kanon Huda</option>
              <option value="Masud Alam">Masud Alam</option>
              <option value="Shahidul Islam">Shahidul Islam</option>
              <option value="Atik Hossen">Atik Hossen</option>
            </select>
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Priority
            </label>
            <select
              className="w-full rounded-md"
              id="priority"
              {...register("priority")}
            >
              <option defaultValue="high">High</option>
              <option value="medium">Medium</option>
              <option defaultValue="low">Low</option>
            </select>
          </div>
          <div className="flex gap-3 justify-end">
            <button type="button" className="btn bg-red-400">Cencel</button>
            <button type="submit" className="btn bg-primary">Submit</button>
          </div>
        </form>
      </Modal>
    );
};

export default AddTaskModal;