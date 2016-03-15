import React, {PropTypes} from 'react';
import classNames from 'classnames';
import TextInput from './TextInput';

const TodoItem = props => (
  <li className={classNames({
    'todo': true,
    'completed': props.isCompleted,
    'editing': props.isEditing
  })}>
    <div className="view">
      <input type="checkbox"
             className="toggle"
             defaultChecked={props.isCompleted}
             onChange={() => props.toggleComplete(props.id)}/>
      <label htmlFor="todo" onDoubleClick={() => props.editItem(props.id)}>
        {props.text}
      </label>
      <button className="destroy" onClick={() => props.deleteItem(props.id)}/>
      <TextInput text={props.text}
                 itemId={props.id}
                 cancelEditing={props.cancelEditing}
                 doneEditing={props.doneEditing}/>
    </div>
  </li>
);

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool,
  isEditing: PropTypes.bool
};

export default TodoItem;
