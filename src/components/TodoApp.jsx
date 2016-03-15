import React from 'react';

export default ({ todos = [] }) => (
  <div>
    <section className="todoapp">
      <section className="main">
        <ul className="todo-list">
          {todos.map(item => (
            <li className="active" key={item.get('text')}>
              <div className="view">
                <input type="checkbox" className="toggle"/>
                <label htmlFor="todo">{item.get('text')}</label>
                <button className="destroy"/>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  </div>
);
