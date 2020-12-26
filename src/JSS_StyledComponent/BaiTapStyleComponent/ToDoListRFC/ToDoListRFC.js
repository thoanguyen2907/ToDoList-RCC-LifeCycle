import React, { useEffect, useState } from 'react'
import { Container } from '../../ComponentsToDoList/Container'
import { ThemeProvider } from 'styled-components'
import { ToDoListDarkTheme } from '../../Themes/ToDoListDarkTheme'
import { ToDoListLightTheme } from '../../Themes/ToDoListLightTheme';
import { ToDoListPrimaryTheme } from '../../Themes/ToDoListPrimaryTheme';
import { Dropdown } from '../../ComponentsToDoList/Dropdown';
import { Heading1, Heading2, Heading3, Heading4, Heading5 } from '../../ComponentsToDoList/Heading';
import { TextField, Label, Input } from '../../ComponentsToDoList/TextField';
import { Button } from '../../ComponentsToDoList/Button';
import { Table, Tr, Td, Th, Thead, Tbody } from '../../ComponentsToDoList/Table';
import { connect, useSelector } from 'react-redux';
import { addTaskToDo, chooseTheme, deleteTask, doneTask, editTask, updateTask } from '../../../redux/actions/ToDoListAction';
import { arrTheme } from '../../Themes/ThemeManager';
import { useRef } from 'react';
 function ToDoListRFC(props) {
    const [state, setState] = useState({
        taskName : '' 
    });
    const taskEdit = useSelector(state => state.ToDoListReducer.taskEdit)
    const renderTaskToDo = () => {
        return props.taskList.filter(task => task.done).map((task, index) => {
            return <Tr key={index}>
                <Th style={{ verticalAlign: 'middle' }}>{task.taskName}</Th>
                <Th className="text-right">
                    <Button onClick = {()=>{props.editTask(task)}} className="ml-1"><i className="fa fa-edit"></i></Button>
                    <Button onClick = {()=> {props.doneTask(task.id)}}  className="ml-1"><i className="fa fa-check"></i></Button>
                    <Button onClick = {()=> {props.deleteTask(task.id)}} className="ml-1"><i className="fa fa-trash"></i></Button>

                </Th>
            </Tr>

        })
    }
    const  renderTaskCompleted = () => {
        return props.taskList.filter(task => !task.done).map((task, index) => {
            return <Tr key={index}>
                <Th style={{ verticalAlign: 'middle' }}>{task.taskName}</Th>
                <Th className="text-right">
                    <Button onClick = {()=> {props.deleteTask(task.id)}}  className="ml-1"><i className="fa fa-trash"></i></Button>

                </Th>
            </Tr>
        })
    }
    const   handleChange = (event)  => {
        let {value} = event.target; 
        setState({taskName: value});
      }
      const   addTask = (e) => {      
        let {taskName} = state; 
        let newTask = {
            id : Date.now(), 
            taskName: taskName,
            done: true
        } 
      props.addTask(newTask); 
        
      }
      const  updateTask = () => {
          let taskNameUpdate = state.taskName; 
          props.updateTask(taskNameUpdate); 
      }
      const renderTheme = () => {
        return arrTheme.map((theme, index) => {
            return  <option value = {theme.id}>{theme.name}</option>
        })
    }
   
    useEffect(()=>{
        console.log('didmount');
      
    },[])
    useEffect(() => {
       console.log(taskEdit);
       setState({
            taskName : taskEdit.taskName
       })
    }, [state.taskName]);

    // componentDidUpdate(prevProps, prevState){
    //     if(prevProps.taskEdit.id !== props.taskEdit.id) {
    //         let taskNameEdit = props.taskEdit.taskName; 
    //         setState({
    //             taskName: taskNameEdit
    //         })
    //     }
    // }
    
    return(
        <ThemeProvider theme={props.themeToDoList}>
            <Container className="w-50">
                <Dropdown onChange={(e)=>{
                    let {value} = e.target; 
                    props.chooseTheme(value)
                }}>
                    {renderTheme()}
                </Dropdown>
                <Heading3>To do list RFC</Heading3>
                <TextField label="Task name" name="taskName" className="w-50" type="text" 
                value={state.taskName} onChange={handleChange} />
                <Button onClick = {() => {addTask()}}   className="ml-2"><i className="fa fa-plus"></i> Add task</Button>
                <Button className="ml-2" onClick={()=>{updateTask()}}><i className="fa fa-upload"></i> Update task</Button>
                <hr />
                <Heading3>Task to do</Heading3>
                <Table>
                    <Thead>
                        {renderTaskToDo()}
                    </Thead>
                </Table>
                <Heading3>Task completed</Heading3>
                <Table>
                    <Thead>
                        {renderTaskCompleted()}
                    </Thead>
                </Table>
            </Container>

        </ThemeProvider>
    )
}
const mapStateToProps = state => {
    return {
        themeToDoList: state.ToDoListReducer.themeToDoList,
        taskList: state.ToDoListReducer.taskList,
        // taskEdit : state.ToDoListReducer.taskEdit
    }}
const mapDispatchToProps = (dispatch) => {
    return {
       addTask : (newTask) => {
           dispatch(addTaskToDo(newTask))
       },
       chooseTheme : (themeID) => {
           dispatch(chooseTheme(themeID))
       },
       deleteTask : (taskID) => {
           dispatch(deleteTask(taskID))
       },
       doneTask : (taskID) => {
        dispatch(doneTask(taskID))
    },
    editTask : (task) => {
        dispatch(editTask(task))
    },
    updateTask : (taskUpdate) => {
        dispatch(updateTask(taskUpdate))
    }
    }   }
export default connect(mapStateToProps, mapDispatchToProps) (ToDoListRFC); 