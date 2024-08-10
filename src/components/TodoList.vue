<script setup lang="ts">
import { Todo } from "@/models/Todo.ts";
import { computed, ref } from "vue";
import type { ComputedRef, Ref } from "vue";
import { useRouter } from "vue-router";
import RadioButtons from "./RadioButtons.vue";

const store = useStore();
const router = useRouter();
const editing: Ref<number> = ref(-1);
const editToDoText: Ref<string> = ref("");
const radioFilter: Ref<string> = ref("");

const removeTodo = (id: number) => store.commit("removeTodo", id);
const toggleCompleteTodo = (id: number) =>
  store.dispatch("toggleCompleteTodo", id);
const editTodo = (todo: Todo) => {
  if (editToDoText.value.trim()) {
    todo.text = editToDoText.value.trim();
    store.dispatch("editTodo", todo);
    editToDoText.value = "";
    editing.value = -1;
  }
};

const handleRadioFilter = (filter: string) => {
  radioFilter.value = filter;
};

const filteredTodos: ComputedRef<Todo[]> = computed(() => {
  let todos: Todo[] = store.state.todos;

  if (radioFilter.value === "completed") {
    todos = todos.filter((elem) => elem.completed === true);
  } else if (radioFilter.value === "pending") {
    todos = todos.filter((elem) => elem.completed === false);
  }

  return todos;
});
</script>

<template>
  <div class="text-2xl font-extrabold my-6 flex items-center justify-center">
    <span> Todo List </span>
  </div>
  <div class="flex mx-6 space-x-6">
    <div>
      <button class="btn btn-primary" @click="router.push('/add')">
        New item
      </button>
    </div>
    <div class="flex space-x-6 align-middle justify-end">
      <RadioButtons @filter="handleRadioFilter" />
    </div>
  </div>

  <div class="m-4">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>ID</th>
          <th>Status</th>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <!-- body -->
      <tbody>
        <tr v-for="todo in filteredTodos" :key="todo.id" class="hover">
          <th>
            {{ todo.id }}
          </th>
          <td>
            <!-- checkbox -->
            <label>
              <input type="checkbox" class="checkbox" :checked="todo.completed" @change="toggleCompleteTodo(todo.id)" />
            </label>
          </td>
          <!-- Desc/Edit -->
          <td>
            <span v-if="editing === todo.id">
              <textarea v-model="editToDoText" class="textarea textarea-primary textarea-ghost textarea-xs max-w-xs"
                :placeholder="todo.text" @keyup.enter="editTodo(todo)" />
            </span>
            <span v-else>{{ todo.text }}</span>
          </td>
          <!-- Edit button(s) -->
          <td>
            <button v-if="!(editing === todo.id)" class="btn btn-ghost btn-xs" @click="editing = todo.id">
              Edit
            </button>
            <div v-else class="flex space-x-2">
              <button class="btn btn-ghost btn-xs" @click="editTodo(todo)">
                Save
              </button>
              <button class="btn btn-ghost btn-xs" @click="editing = -1">
                Cancel
              </button>
            </div>
          </td>
          <!-- Delete button -->
          <td>
            <button class="btn btn-ghost btn-xs" @click="removeTodo(todo.id)">
              Remove
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
