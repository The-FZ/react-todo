var React =  require('react');
var createReactClass = require('create-react-class');


var AddTodo  = createReactClass({

  handleSubmit:function(event){
    event.preventDefault();
    var todoText = this.refs.todo.value;
    if(todoText.length>0){
      this.refs.todo.value='';
      this.props.onAddTodo(todoText);
    }
    else{
      this.refs.todoText.focus();
    }
  },

  render:function(){
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type='text' placeholder='What do you want to do ?' ref='todo'/>
            <button className='button expanded'>Add Todo</button>
          </form>
        </div>
    );
  }
});

module.exports = AddTodo;
