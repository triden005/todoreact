import React from "react";
// import "./body.css"
import Todoapplet from "./todoapplet"

import {todos} from "./todoitems"




// function Body(){
//     // const nums=[1,2,3,4,5,5,6,7,8,9,10];
//     // const doubles = nums.map(function(num){
//     //     return num*2;
//     // })
//     // console.log(doubles);
//     console.log(todos)
//     const todocomponents=todos.map(t => <Todoapplet key={t.id} name={t.todo}/>)

//     return( 
//     <div>
//         ToDoList
//         {todocomponents}
//     </div> );
// };

class Body extends React.Component{

    constructor(){
        super();
        this.state = {
            todosData : todos,
            newtodotext :""
        }

        this.handelChange = this.handelChange.bind(this);
        this.handelsubmit = this.handelsubmit.bind(this);
        this.handelchangestate = this.handelchangestate.bind(this);
    }
    handelChange(id){
        this.setState((prevstate)=>{
            // let a=prevstate;
            // console.log(a);

            // a.todosData.forEach(element => {
            //     if(element.id===id){
                    // element.ischecked=!element.ischecked
            //     }
            // });
            // return a;
            //using map
            const updatedtodos = prevstate.todosData.map(todo =>{
                if(todo.id===id){
                    todo.iscompleted=!todo.iscompleted
                }
                return todo;
            })
            // console.log(updatedtodos);
            return updatedtodos;

        })
        console.log("changed "+id);
    };
    handelchangestate(event){
        const {name,value} = event.target;
        this.setState({
            [name] : value,
        })
    }
    handelsubmit(event){
        event.preventDefault();
        // console.log(event.target)
        if(this.state.newtodotext==="") return
        var last = this.state.todosData.length;
        var id = this.state.todosData[last-1].id+1;
        const newtodo={
            id:id,
            todo:this.state.newtodotext,
            iscompleted : false
        }
        this.setState((prevstate)=>{
            var a=prevstate.todosData;
            a.push(newtodo)
            console.log(a)
            return {
                todosData : a,
                newtodotext: ""
            }
        })
    }
    render(){
        const todocomponents=this.state.todosData.map(t => <Todoapplet key={t.id} data={t} handelChange={this.handelChange}/>);

        return (
        <div>
            <h1>ToDoList</h1>
            <form onSubmit={this.handelsubmit}>
            <input type="text" name="newtodotext" value={this.state.newtodotext} onChange={this.handelchangestate} />
            <button > Add</button>
            </form>
            
            {todocomponents}
        </div>

        );
    }
}

export default Body;