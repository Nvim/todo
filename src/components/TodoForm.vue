<script setup lang="ts">
import { Todo } from "@/models/Todo.ts";
import { ref } from "vue";
import type { Ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const newTodoText: Ref<string> = ref("");

const addToDo = () => {
  const newTodoId = store.state.nextToDoId;
  const newTodo = {
    id: newTodoId,
    text: newTodoText.value.trim(),
    completed: false,
  };
  store.dispatch("addTodo", newTodo);
  newTodoText.value = "";
};
</script>

<template>
  <div class="text-2xl font-extrabold m-4 w-full">Todo Form</div>
  <div>
    <button
      class="bg-blue-300 rounded-lg p-2 hover:bg-blue-500"
      @click="router.push('/')"
    >
      Back to list
    </button>
  </div>
  <div class="m-2">
    <input
      v-model="newTodoText"
      type="text"
      placeholder="What do you have to do?"
      @keyup.enter="addToDo"
    />
  </div>
  <div class="m-2">
    <button
      class="bg-blue-300 rounded-lg p-2"
      :class="{ 'hover:bg-blue-500': newTodoText.trim() }"
      :disabled="!newTodoText.trim()"
      @click="addToDo"
    >
      Add
    </button>
  </div>
</template>
