import { ToDoListDarkTheme } from "../../JSS_StyledComponent/Themes/ToDoListDarkTheme"
import { ADD_TASK, CHOOSE_THEME, DELETE_TASK, DONE_TASK, EDIT_TASK, UPDATE_TASK } from "../actions/types/ToDoListTypes"
import {arrTheme} from './../../JSS_StyledComponent/Themes/ThemeManager'; 

const initialState = {
    themeToDoList: ToDoListDarkTheme,
    taskList:[
        {id:'task-1',taskName:'task 1',done:true},
        {id:'task-2',taskName:'task 2',done:false},
        {id:'task-3',taskName:'task 3',done:true},
        {id:'task-4',taskName:'task 4',done:false},
    ], 
    taskEdit: {id : "task-1", taskName: "task 1" , done: false}
}

export default (state = initialState, action) => {
    let index = -1; 
    let taskListUpdate = [...state.taskList]; 
    switch (action.type) {

        case ADD_TASK: 
       
        index = taskListUpdate.findIndex(item => item.taskName === action.newTask.id); 
        if(index !== -1){
            alert("Task Name exists already !!!"); 
            return {...state}
        } else {
            taskListUpdate.push(action.newTask); 
        }
        state.taskList = taskListUpdate; 

        return {...state}
        case CHOOSE_THEME: 
        let themeChosen = arrTheme.find(item => item.id == action.themeID); 
        if(themeChosen){
            state.themeToDoList = themeChosen.theme;  
        }

        return {...state}
        case DELETE_TASK: 
        

        index = taskListUpdate.findIndex(item => item.id == action.taskID); 
        if(index !== -1) {
            taskListUpdate.splice(index, 1) 
        }
        state.taskList = taskListUpdate 
        return {...state}
        case DONE_TASK: 
        index = taskListUpdate.findIndex(item => item.id == action.taskID); 
        if(index !== -1) {
            taskListUpdate[index].done = false; 
        }
        state.taskList = taskListUpdate  
        return {...state}
        case EDIT_TASK: 

        state.taskEdit = action.task; 
        console.log(state.taskEdit)
        return {...state}
        case UPDATE_TASK: 
        state.taskEdit = {...state.taskEdit, taskName : action.taskUpdate}; 
        index = taskListUpdate.findIndex(item => item.id === state.taskEdit.id); 
        if(index !== -1){
            taskListUpdate[index] = state.taskEdit; 
        }
        state.taskList = taskListUpdate; 
        return {...state}
    default:
        return {...state}
    }
}
