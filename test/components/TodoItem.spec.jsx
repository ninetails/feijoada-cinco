import React from 'react';
import {renderIntoDocument, Simulate} from 'react-addons-test-utils';
import {expect} from 'chai';
import TodoItem from '../../src/components/TodoItem';

describe('TodoItem', () => {
  it('renders an item', () => {
    const text = 'React';
    const component = renderIntoDocument(<div><TodoItem text={text}/></div>);
    const todo = component.querySelector('li');

    expect(todo).to.exist;
    expect(todo.textContent).to.contain('React');
  });

  it('strikes through the item if it is completed', () => {
    const text = 'React';
    const component = renderIntoDocument(<div><TodoItem text={text} isCompleted={true}/></div>);
    const todo = component.querySelector('li');

    expect(todo).to.exist;
    expect(todo.classList.contains('completed')).to.be.true;
  });

  it('should look different when editing', () => {
    const text = 'React';
    const component = renderIntoDocument(<div><TodoItem text={text} isEditing={true}/></div>);
    const todo = component.querySelector('li');

    expect(todo).to.exist;
    expect(todo.classList.contains('editing')).to.be.true;
  });

  it('should be checked if the item is completed', () => {
    const text = 'React';
    const text2 = 'Redux';
    const component = renderIntoDocument(
      <div>
        <TodoItem text={text} isCompleted={true}/>
        <TodoItem text={text2} isCompleted={false}/>
      </div>
    );
    const inputs = [...component.querySelectorAll('input')];

    expect(inputs[0].checked).to.be.true;
    expect(inputs[1].checked).to.be.false;
  });

  it('invokes callback when the delete button is clicked', () => {
    const text = 'React';
    let deleted = false;
    const deleteItem = () => deleted = true;
    const component = renderIntoDocument(
      <div>
        <TodoItem text={text} deleteItem={deleteItem}/>
      </div>
    );
    const button = component.querySelector('button');
    expect(button).to.exist;
    Simulate.click(button);
    expect(deleted).to.be.true;
  });

  it('invokes callback when checkbox is clicked', () => {
    const text = 'React';
    let isChecked = false;
    const toggleComplete = () => isChecked = true;
    const component = renderIntoDocument(
      <div>
        <TodoItem text={text} toggleComplete={toggleComplete}/>
      </div>
    );
    const input = component.querySelector('input[type=checkbox]');
    expect(input).to.exist;
    Simulate.click(input);
    expect(isChecked).to.be.true;
    Simulate.click(input);
    expect(isChecked).to.be.false;
  });

  it('calls a callback when text is double clicked', () => {
    let text = 'React';
    const editItem = () => text = 'Redux';
    const component = renderIntoDocument(
      <div>
        <TodoItem text={text} editItem={editItem}/>
      </div>
    );
    const label = component.querySelector('label');
    expect(label).to.exist;
    Simulate.doubleClick(label);
    expect(text).to.equal('Redux');
  });
});
