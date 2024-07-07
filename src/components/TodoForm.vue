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
  <div class="flex flex-col space-y-6 items-center justify-center h-3/5">
    <div class="text-2xl font-extrabold">
      <span> Todo Form </span>
    </div>
    <div class="">
      <textarea
        v-model="newTodoText"
        class="textarea tertarea-primary"
        type="text"
        placeholder="What do you have to do?"
        @keyup.enter="addToDo"
      />
    </div>
    <div class="flex space-x-4 items-center justify-center">
      <button
        class="btn btn-primary"
        :disabled="!newTodoText.trim()"
        @click="addToDo"
      >
        Add
      </button>
      <button class="btn btn-primary" @click="router.push('/')">
        Back to list
      </button>
    </div>
  </div>
</template>
