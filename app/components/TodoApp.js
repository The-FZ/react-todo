var React = require('react');
var createReactClass = require('create-react-class');
var TodoList = require('TodoList');

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

  render:function(){
    var {todos} = this.state;
    return (
      <TodoList todos={todos}/>
      );
  }
});

module.exports = TodoApp;
