import React from 'react';


import SessionSwapper from '@/components/ui/SessionSwapper';
import '@/styles/globalStyled.css.ts';
import TodoProvider  from '@/context/TodoContext';
import TodoInput from '@/components/ui/TodoInput';
import TodoList from '@/components/ui/TodoList';
import KillButton from '@/components/ui/killButton';

const App: React.FC = () => {
  return (
    <TodoProvider>
      <h1>Todo List</h1>
      <SessionSwapper />
      <TodoInput />
      <TodoList />
      <KillButton/>
    </TodoProvider>
  );
};

export default App;
