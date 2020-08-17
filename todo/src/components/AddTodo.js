import React from 'react';

export default function AddTodo(props) {
  return (
    <div class='add-todo'>
      <input
        type='text'
        name='currentTodo'
        value={props.currentTodo}
        onChange={props.handleChanges}
      />
      <div class='todo-buttons'>
        <button onClick={props.handleSubmit}>Add Item</button>
        <button onClick={props.clearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
}
