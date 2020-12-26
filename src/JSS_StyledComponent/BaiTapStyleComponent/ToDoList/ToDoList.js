// import React, { Component } from 'react'
// import { Container } from '../../ComponentsToDoList/Container'
// import { ThemeProvider } from 'styled-components'
// import { ToDoListDarkTheme } from '../../Themes/ToDoListDarkTheme'
// import { ToDoListLightTheme } from '../../Themes/ToDoListLightTheme';
// import { ToDoListPrimaryTheme } from '../../Themes/ToDoListPrimaryTheme';
// import { Dropdown } from '../../ComponentsToDoList/Dropdown';
// import { Heading1, Heading2, Heading3, Heading4, Heading5 } from '../../ComponentsToDoList/Heading';
// import { TextField, Label, Input } from '../../ComponentsToDoList/TextField';
// import { Button } from '../../ComponentsToDoList/Button';
// import { Table, Tr, Td, Th, Thead, Tbody } from '../../ComponentsToDoList/Table';
// import { connect } from 'react-redux';
// import { addTaskToDo, chooseTheme, deleteTask, doneTask, editTask, updateTask } from '../../../redux/actions/ToDoListAction';
// import { arrTheme } from '../../Themes/ThemeManager';

// class ToDoList extends Component {
//     state = {
//         taskName : '' , 
//     }

//     renderTaskToDo = () => {
//         return this.props.taskList.filter(task => task.done).map((task, index) => {
//             return <Tr key={index}>
//                 <Th style={{ verticalAlign: 'middle' }}>{task.taskName}</Th>
//                 <Th className="text-right">
//                     <Button onClick = {()=>{this.props.editTask(task)}} className="ml-1"><i className="fa fa-edit"></i></Button>
//                     <Button onClick = {()=> {this.props.doneTask(task.id)}}  className="ml-1"><i className="fa fa-check"></i></Button>
//                     <Button onClick = {()=> {this.props.deleteTask(task.id)}} className="ml-1"><i className="fa fa-trash"></i></Button>

//                 </Th>
//             </Tr>

//         })
//     }
//     renderTaskCompleted = () => {
//         return this.props.taskList.filter(task => !task.done).map((task, index) => {
//             return <Tr key={index}>
//                 <Th style={{ verticalAlign: 'middle' }}>{task.taskName}</Th>
//                 <Th className="text-right">
//                     <Button onClick = {()=> {this.props.deleteTask(task.id)}}  className="ml-1"><i className="fa fa-trash"></i></Button>

//                 </Th>
//             </Tr>
//         })
//     }
//     handleChange = (event)  => {
//         let {value} = event.target; 
//      this.setState({taskName: value});
//       }
//       addTask = (e) => {      
//         let {taskName} = this.state; 
//         let newTask = {
//             id : Date.now(), 
//             taskName: taskName,
//             done: true
//         } 

//         this.props.addTask(newTask); 
        
//       }
//       updateTask = () => {
//           let taskNameUpdate = this.state.taskName; 
//           this.props.updateTask(taskNameUpdate); 
//       }
//     renderTheme = () => {
//         return arrTheme.map((theme, index) => {
//             return  <option value = {theme.id}>{theme.name}</option>
//         })
//     }
//     componentDidUpdate(prevProps, prevState){
//         if(prevProps.taskEdit.id !== this.props.taskEdit.id) {
//             let taskNameEdit = this.props.taskEdit.taskName; 
//             this.setState({
//                 taskName: taskNameEdit
//             })
//         }
//     }
    
//     render() {
//         return (
//             <ThemeProvider theme={this.props.themeToDoList}>
//                 <Container className="w-50">
//                     <Dropdown onChange={(e)=>{
//                         let {value} = e.target; 
//                         this.props.chooseTheme(value)
//                     }}>
//                         {this.renderTheme()}
//                     </Dropdown>
//                     <Heading3>To do list</Heading3>
//                     <TextField label="Task name" name="taskName" className="w-50" type="text" 
//                     value={this.state.taskName} onChange={this.handleChange} />
//                     <Button onClick = {() => {this.addTask()}}   className="ml-2"><i className="fa fa-plus"></i> Add task</Button>
//                     <Button className="ml-2" onClick={()=>{this.updateTask()}}><i className="fa fa-upload"></i> Update task</Button>
//                     <hr />
//                     <Heading3>Task to do</Heading3>
//                     <Table>
//                         <Thead>
//                             {this.renderTaskToDo()}
//                         </Thead>
//                     </Table>
//                     <Heading3>Task completed</Heading3>
//                     <Table>
//                         <Thead>
//                             {this.renderTaskCompleted()}
//                         </Thead>
//                     </Table>
//                 </Container>

//             </ThemeProvider>
//         )
//     }
// }


// const mapStateToProps = state => {
//     return {
//         themeToDoList: state.ToDoListReducer.themeToDoList,
//         taskList: state.ToDoListReducer.taskList,
//         taskEdit : state.ToDoListReducer.taskEdit
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//        addTask : (newTask) => {
//            dispatch(addTaskToDo(newTask))
//        },
//        chooseTheme : (themeID) => {
//            dispatch(chooseTheme(themeID))
//        },
//        deleteTask : (taskID) => {
//            dispatch(deleteTask(taskID))
//        },
//        doneTask : (taskID) => {
//         dispatch(doneTask(taskID))
//     },
//     editTask : (task) => {
//         dispatch(editTask(task))
//     },
//     updateTask : (taskUpdate) => {
//         dispatch(updateTask(taskUpdate))
//     }
//     }    
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)