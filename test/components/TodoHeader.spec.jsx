import React from 'react';
import {renderIntoDocument, Simulate} from 'react-addons-test-utils';
import {expect} from 'chai';
import TodoHeader from '../../src/components/TodoHeader';

describe('TodoHeader', () => {
  it('calls a callback on submit', () => {
    var addedItem = ''
    const addItem = (item) => addedItem = item;
    const component = renderIntoDocument(
      <div>
        <TodoHeader addItem={addItem}/>
      </div>
    );

    const input = component.querySelector('input');
    input.value = 'This is a new item';
    Simulate.change(input);
    Simulate.keyPress(input, {key: "Enter", keyCode: 13, which: 13});

    expect(addedItem).to.equal('This is a new item');
  });

});
