var React = require('react');
var createReactClass = require('create-react-class');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = createReactClass({
  getInitialState:function(){
    return  {
      showCompleted:false,
      searchText:'',
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
  handleSearch:function(showCompleted, searchText){
    this.setState({
      showCompleted:showCompleted,
      searchText:searchText.toLowerCase()
    });
  },

  render:function(){
    var {todos} = this.state;
    return (
      <div>
      <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos}/>
        <AddTodo onAddTodo = {this.handleAddTodo}/>
      </div>
      );
  }
});

module.exports = TodoApp;
