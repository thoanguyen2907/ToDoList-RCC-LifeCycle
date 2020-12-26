import { ADD_TASK, CHOOSE_THEME, DELETE_TASK, DONE_TASK, EDIT_TASK, UPDATE_TASK } from "./types/ToDoListTypes"

export const addTaskToDo = (newTask) => {
 return {
    type : ADD_TASK, 
    newTask
 }  
}
export const chooseTheme = (themeID) => {
    return {
       type : CHOOSE_THEME, 
       themeID
    }  
   }
export const deleteTask = (taskID) => {
    return {
       type : DELETE_TASK, 
       taskID
    }  
   }
   export const doneTask = (taskID) => {
    return {
       type : DONE_TASK, 
       taskID
    }  
   }
   export const editTask = (task) => {
    return {
       type : EDIT_TASK, 
       task
    }  
   }
   export const updateTask = (taskUpdate) => {
    return {
       type : UPDATE_TASK, 
       taskUpdate
    }  
   }

