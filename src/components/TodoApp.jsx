import React from 'react';
import TodoHeader from './TodoHeader';
// import TodoTools from './TodoTools';
import TodoList from './TodoList';
import Footer from './Footer';

const getActiveItems = todos => {
  if (!todos || !todos.length) {
    return 0;
  }

  const activeItems = todos.filter(item => item.get('status') === 'active');
  return activeItems.size;
};

export default ({ todos=[], filter='all' }) => (
  <div>
    <section className="todoapp">
      <TodoHeader/>
      <TodoList todos={todos} filter={filter}/>
      {/* <TodoTools filter={filter} nbActiveItens={getActiveItems(todos)}/> */}
    </section>
    <Footer/>
  </div>
);
