import React from 'react';
import {renderIntoDocument, Simulate} from 'react-addons-test-utils';
import {expect} from 'chai';
import TextInput from '../../src/components/TextInput';

describe('TextInput', () => {
  it('calls a callback when pressing enter', () => {
    const text = 'React';
    let hasDoneEditing = false;
    const doneEditing = () => hasDoneEditing = true;
    const component = renderIntoDocument(
      <div>
        <TextInput text={text} doneEditing={doneEditing}/>
      </div>
    );
    const input = component.querySelector('input[type=text]');
    expect(input).to.exist;
    Simulate.keyDown(input, {key: "Enter", keyCode: 13, which: 13});

    expect(hasDoneEditing).to.be.true;
  });

  it('calls a callback when pressing escape or losing focus', () => {
    const text = 'React';
    let hasCanceledEditing = false;
    const cancelEditing = () => hasCanceledEditing = true;
    const component = renderIntoDocument(
      <div>
        <TextInput text={text} cancelEditing={cancelEditing}/>
      </div>
    );
    const input = component.querySelector('input[type=text]');
    expect(input).to.exist;
    Simulate.keyDown(input, {key: "Escape", keyCode: 27, which: 27});

    expect(hasCanceledEditing).to.be.true;
  });
});
