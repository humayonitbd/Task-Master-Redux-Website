import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [{
    id: 1,
    status: 'pending',
    title: 'Remove Button',
    description:
      'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
    date: '2023-08-28',
    assignedTo: 'Humayon Forid',
    priority: 'high',
  }],
  userTasks:[]
}

 const tasksSlice = createSlice({
  name: 'tasksSlice',
  initialState,
  reducers: {
    addTask:(state,{payload})=>{
       let updatedTasks = [];
      if(state.tasks.length  === 0){
        // state.tasks.push({id:1,status:"pending",...payload});
        updatedTasks = [{ id: 1, status: "pending", ...payload }];
        
      }else{
       const lastElement = state.tasks.at(-1);
      //  state.tasks.push({id:lastElement.id +1,status:"pending", ...payload});
      updatedTasks = [...state.tasks, { id: lastElement.id + 1, status: "pending", ...payload }];
  
      }

       // Update state
      state.tasks = updatedTasks;

      // Update localStorage
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      
    },
    removeTask:(state,{payload})=>{
    state.tasks = state.tasks.filter((item)=>item.id !== payload);
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  },
  updateStatus: (state, { payload }) => {
      const { id, status } = payload;
      
      const targetTask = state.tasks.find(task => task.id === id);
      if (targetTask) {
        targetTask.status = status;
      }
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  
    usersTasks:(state,{payload})=>{
      state.userTasks=state.tasks.filter((item)=>item.assignedTo === payload);
      localStorage.setItem('userTasks', JSON.stringify(state.userTasks));
    }
  },
  
  
})

// Action creators are generated for each case reducer function
export const {addTask, removeTask , updateStatus,myWorkStatus,usersTasks } = tasksSlice.actions;

export default tasksSlice.reducer;