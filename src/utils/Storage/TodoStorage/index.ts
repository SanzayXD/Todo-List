import { AUTH_USER_KEY } from '@/hooks/LoginHook';
import { StorageType, Todo } from '@/data/TodoModel/TodoModel.ts';

export const getTodos = (storageType: StorageType): Todo[] => {
  const authUser = localStorage.getItem(AUTH_USER_KEY);
  if (authUser) {
    const storedTodos =
      storageType === StorageType.LOCAL
        ? localStorage.getItem(`todos_${authUser}`)
        : sessionStorage.getItem(`todos_${authUser}`);


    return storedTodos ? JSON.parse(storedTodos) : [];

  }
  console.warn('No auth user found in Local Storage.');
  return [];
};
export const saveTodos = (todos: Todo[], storageType: StorageType): void => {
  const authUser = localStorage.getItem(AUTH_USER_KEY);
  if (authUser) {
    if (storageType === StorageType.LOCAL) {
      localStorage.setItem(`todos_${authUser}`, JSON.stringify(todos));
    } else {
      sessionStorage.setItem(`todos_${authUser}`, JSON.stringify(todos));
    }
  }
};