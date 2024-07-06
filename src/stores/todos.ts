import { Todo } from "@/models/Todo.ts";
import { createStore } from "vuex";
import { Commit } from "vuex/types/index.js";

// Todo list + Next ID
interface State {
  todos: Todo[];
  nextToDoId: number;
}

export const useTodosStore = createStore<State>({
  state() {
    return {
      todos: [],
      nextToDoId: 1,
    };
  },
  mutations: {
    addTodo(state: State, todo: Todo) {
      state.todos.push(todo);
    },
    toggleComplete(state: State, id: number) {
      const todo = state.todos.find((elem) => elem.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo(state: State, id: number) {
      state.todos = state.todos.filter((elem) => elem.id !== id);
    },
  },
  actions: {
    addTodo({ commit }: { commit: Commit }, todo: Todo) {
      commit("addTodo", todo);
    },
    toggleTodo({ commit }: { commit: Commit }, todoId: number) {
      commit("toggleTodo", todoId);
    },
    removeTodo({ commit }: { commit: Commit }, todoId: number) {
      commit("removeTodo", todoId);
    },
  },
  getters: {
    completedTodos: (state: State) => {
      return state.todos.filter((todo) => todo.completed);
    },
    activeTodos: (state: State) => {
      return state.todos.filter((todo) => !todo.completed);
    },
  },
});
