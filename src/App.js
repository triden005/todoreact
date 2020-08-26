import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import "./footer.css"
import Body from "./body"
import Animation from "./animation"



// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <Header className="App-link" />
//       <Body />
//       <Footer />
//     </div>
//   );
// }
class App extends React.Component{
  constructor() {
    super();
    this.state = {
      statestatement : "yes class helps us to add state",
      isloading:true,
      isloggedin:false,
    }
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        statestatement : "yes class helps us to add state",
        isloading:false,
      })
    },3000);
  }

  render () {

    return (
      <div className="App">
        <Header className="App-link" />
        <Animation />
        <Body />
        {/* <Form /> */}
        {/* <Body2 text={`this is from body2 ${this.state.statestatement} `} loading={this.state.isloading}/> */}
        <Footer />
      </div>
    )
  }
}



///learning environment
class Body2 extends React.Component{

  constructor(){
    super()
    this.state = {
      character : " ",
      count: 0
    }

    // This binding is necessary to make `this` work in the callback    
    this.Addstatecount = this.Addstatecount.bind(this);

  }
  componentDidMount(){
    this.setState({loading : true})
    fetch("https://swapi.dev/api/people/1/")
      .then((response)=>{
      return response.json()
    }).then(data => {
      this.setState({
        character : data,
        // count : 0,
        loading :false
      })
    })
  }
  Addstatecount(){
    // this.state.count++;
    this.setState((prevstate)=>{
      return {
        count:prevstate.count+1,
      }

    });
    // console.log("clicked") 
  }

  render () {
    console.log(this.props.loading);
    // if(this.props.loading){
    //   return(
    //     <div>
    //       Loading ...
    //     </div>
    //   )
    // }
    // var a=  `${this.props.text}and <br> state=${this.state.count} <br>` ;
    return (
      <div>
        {this.props.loading ? "Loading " :<p>{this.props.text}and <br/> state={this.state.count} <br/>
          <button onClick={this.Addstatecount}>change</button></p>}<br/>
        {this.state.loading ?   " LoadingCharacter . . ." : this.state.character.name}
      </div>
      
    )
  }
}


//form learning 
class Form extends React.Component{
  constructor (){
    super()
    this.state={
      firstname: "",
      lastname : ""
    }
    this.handelchange = this.handelchange.bind (this)
  }
  handelchange(event){
    //important point
    const {name,value} = event.target;
    this.setState({
      [name]:value,
    })
  }
  render () {
    return(
      <div>
      <form>
        <input 
          type="text"
          name="firstname"
          onChange={this.handelchange}
          placeholder="firstname"
        />
        <input 
          type="text"
          name="lastname"
          value={this.state.lastname}
          onChange={this.handelchange}
          placeholder="lastname"
        />

      </form>
      {this.state.firstname}-{this.state.lastname}
      </div>

    )
    
  }

}
export default App;
