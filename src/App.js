import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ToDoItem from './components/ToDoItem';
import todosData from './todosData.js';

class App extends Component {
        constructor(){
          super()
          this.state = {
            todos:todosData,
            character:[],
            loading:false,
            fname:"",lname:"",age:""
          }
          this.handleChange =this.handleChange.bind(this);
          this.handlefirstnamechange =this.handlefirstnamechange.bind(this)
        }
        handlefirstnamechange(e) {
          const {name,value} = e.target
          this.setState({[name]:value})
        }
        componentDidMount() {
                      this.setState({loading:true})
                      return fetch("https://swapi.co/api/people/1", {
                                  method: 'GET',
                                  mode: 'cors',
                                  cache: 'no-cache',
                                  headers: {
                                      'Content-Type': 'application/json',

                                  }
                  })
                  .then(response => response.json())
                  .then(data => {
                    this.setState ({
                      character:data,
                      loading:false
                    })
                  }

               )

        }
        componentWillMount(){
          console.log("componentWillMount")
        }
        componentWillReceiveProps(){
          console.log("componentWillReceiveProps")
        }
        shouldComponentUpdate(){
          console.log("shouldComponentUpdate")
          return true
        }


        handleChange(id) {
          this.setState(prevState =>{
          const updatedtodos = prevState.todos.map (todo =>{
             if(todo.id === id){
               todo.completed = !todo.completed
             }
             return todo
          })
          return {
            todos:updatedtodos
          }
          })
        }

        render(){
                const todoItems= this.state.todos.map(item => <ToDoItem handleChange ={this.handleChange} key={item.id} item={item} />)
                const loading = this.state.loading ? "Loading...": this.state.character.name
                return (
                  <div className="App">
                  <p>{loading}</p>
                  {todoItems}
                  </div>
                )

                /*return (
                  <div>
                  <form>
                  <label> First Name</label>
                  <input type="text" placeholder="first name" name="fname" onChange ={this.handlefirstnamechange} />
                  <label> Last Name</label>
                  <input type="text" placeholder="first name" name="lname" onChange ={this.handlefirstnamechange} />
                  <label> Age</label>
                  <input type="text" placeholder="first name" name="age" onChange ={this.handlefirstnamechange} />
                  First Name :{this.state.fname}
                    Last Name :{this.state.lname}
                      age :{this.state.age}
                  </form>
                  </div>
                )*/
        }

}



export default App;
