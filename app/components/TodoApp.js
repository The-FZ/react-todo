var React = require('react');
var createReactClass = require('create-react-class');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');


var TodoApp = createReactClass({
  getInitialState:function(){
    return  {
      todos:[
        {
          id:1,
          text:'Walk the cat'
        },
        {
          id:2,
          text:'clean the yard'
        },
        {
          id:3,
          text:'Go to gym'
        },
        {
          id:4,
          text:'Take a bath'
        }
      ]
    };
  },
  handleAddTodo:function(text){
    alert(text);
  },

  render:function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo = {this.handleAddTodo}/>
      </div>
      );
  }
});

module.exports = TodoApp;
