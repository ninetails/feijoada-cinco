import React, {PropTypes} from 'react';
import TodoItem from './TodoItem';

const TodoList = props => (
  <section className="main">
    <ul className="todo-list">
      {props.todos
        .filter((item) => props.filter === 'all' || props.filter === item.get('status'))
        .map(item => (
          <TodoItem id={item.get('id')}
                    key={item.get('text')}
                    text={item.get('text')}
                    isCompleted={item.get('status') === 'completed'}
                    isEditing={item.get('editing')}
                    toggleComplete={props.toggleComplete}
                    deleteItem={props.deleteItem}
                    editItem={props.editItem}/>
        )
      )}
    </ul>
  </section>
);

TodoList.propTypes = {
  todos: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired
};

export default TodoList;
