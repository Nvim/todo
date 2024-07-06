<script setup lang="ts">
import { Todo } from "@/models/Todo.ts";
import { computed, ref } from "vue";
import type { Ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const editing: Ref<number> = ref(null);
const editToDoText: Ref<string> = ref("");

const removeTodo = (id) => store.commit("removeTodo", id);
const toggleCompleteTodo = (id) => store.dispatch("toggleCompleteTodo", id);
const editTodo = (todo: Todo) => {
  if (editToDoText.value.trim()) {
    todo.text = editToDoText.value.trim();
    store.dispatch("editTodo", todo);
    editToDoText.value = "";
    editing.value = null;
  }
};

const todos: Array<Todo> = computed(() => {
  return store.state.todos;
});
</script>
<template>
  <div class="text-2xl font-extrabold m-4 w-full">Todo List</div>
  <div>
    <button
      class="bg-blue-300 rounded-lg p-2 hover:bg-blue-500"
      @click="router.push('/add')"
    >
      New item
    </button>
  </div>
  <div class="m-2">
    <div class="">
      <ul class="space-y-2">
        <li
          v-for="todo in todos"
          :key="todo.id"
          class="bg-gray-100 rounded-lg space-x-8 p-2"
        >
          <span>
            {{ todo.id }}
          </span>
          <input
            type="checkbox"
            :checked="todo.completed"
            @change="toggleCompleteTodo(todo.id)"
          />
          <span v-if="editing === todo.id">
            <input
              v-model="editToDoText"
              class="bg-gray-300 rounded-full px-2"
              type="text"
              :placeholder="todo.text"
              @keyup.enter="editTodo(todo)"
            />
          </span>
          <span v-else>{{ todo.text }}</span>

          <button v-if="!(editing === todo.id)" @click="editing = todo.id">
            Edit
          </button>
          <button v-else @click="editing = null">Cancel</button>

          <button @click="removeTodo(todo.id)">Remove</button>
        </li>
      </ul>
    </div>
  </div>
</template>
