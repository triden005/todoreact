import React from "react";
import "./todoapplet.css"


function Todoapplet(params){
    // console.log(params);
    const completestyle = {
        fonStyle : "italic",
        color:"#cdcdcd",
        textDecoration : "line-through"
    }
    return( 
    <div className="todos">
        <input type="checkbox" checked={params.data.iscompleted}
        onChange={()=>params.handelChange(params.data.id)}></input>
        <p style={params.data.iscompleted ? completestyle: null}>{params.data.todo}</p>
    </div> );
};




export default Todoapplet;