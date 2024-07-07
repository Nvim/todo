<script setup lang="ts">
const emit = defineEmits(["filter"]);

const filter = (e) => {
  emit("filter", e.target.value);
};
</script>

<template>
  <div class="mx-4 flex">
    <input
      id="all"
      type="radio"
      value="all"
      name="radio"
      checked
      @change="filter"
    />
    <label for="all" class="text-sm px-3">All</label>
  </div>
  <div class="mx-4 flex">
    <input
      id="completed"
      type="radio"
      value="completed"
      name="radio"
      @change="filter"
    />
    <label for="completed" class="text-sm px-3">Completed</label>
  </div>
  <div class="mx-4 flex">
    <input
      id="pending"
      type="radio"
      value="pending"
      name="radio"
      @change="filter"
    />
    <label for="pending" class="text-sm px-3">Pending</label>
  </div>
</template>
