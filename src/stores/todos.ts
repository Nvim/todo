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
      todos: [
        { id: 1, text: "Test", completed: false },
        { id: 2, text: "Test #2", completed: true },
      ],
      nextToDoId: 3,
    };
  },
  mutations: {
    addTodo(state: State, todo: Todo) {
      state.todos.push(todo);
      state.nextToDoId++;
    },
    toggleCompleteTodo(state: State, id: number) {
      const todo = state.todos.find((elem) => elem.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo(state: State, id: number) {
      state.todos = state.todos.filter((elem) => elem.id !== id);
    },
    editTodo(state: State, todo: Todo) {
      const toEdit = state.todos.find((elem) => elem.id === todo.id);
      if (toEdit) {
        toEdit.text = todo.text;
      }
    },
  },
  actions: {
    addTodo({ commit }: { commit: Commit }, todo: Todo) {
      commit("addTodo", todo);
    },
    toggleCompleteTodo({ commit }: { commit: Commit }, todoId: number) {
      commit("toggleCompleteTodo", todoId);
    },
    removeTodo({ commit }: { commit: Commit }, todoId: number) {
      commit("removeTodo", todoId);
    },
    editTodo({ commit }: { commit: Commit }, todoId: number) {
      commit("editTodo", todoId);
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
