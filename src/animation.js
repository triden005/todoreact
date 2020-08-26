import React from "react"
import "./animation.css"


class Animation extends React.Component {
    constructor(){
        super();
        this.state={
            animationtext:"hello world",
            displaytext : "",
        }
        this.animationstart = this.animationstart.bind(this);
    }
    componentDidMount(){
        this.animationstart(0,this.state.animationtext.length);
    }
    animationstart(x,y){
        console.log("animation started");
        console.log(y)
        if(x>=y) return ;
        console.log(this.state);
        // this.setState({displaytext: "hellojupiter"})
        this.setState(prevstate=>{
            var text = prevstate.displaytext;
            text = text+prevstate.animationtext[x];
            console.log(text)
            return {displaytext :text };
        })
        setTimeout(() => {
            this.animationstart(x+1,y);
        }, 1500);

        // function recur (this){
            // this.setState((prevstate)=>{
            //     var text = "";
            //     text = text.push(prevstate.animationtext[i])
            //     i++;
            //     return({displaytext : text})
            // })
    
        // if(i<j)
        // setInterval(recur, 1000);
        
    }

    render() { 
        return (
            <div style={{height:"100px"}}>
                {/* {this.animationstart()} */}
                <p className="laddo">{this.state.displaytext} </p>
            </div>
        )
    }

}

export default Animation;