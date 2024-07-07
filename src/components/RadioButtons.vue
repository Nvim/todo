<script setup lang="ts">
const emit = defineEmits(["filter"]);

const filter = (e) => {
  emit("filter", e.target.value);
};
</script>

<template>
  <div class="form-control">
    <label for="all" class="label cursor-pointer">
      <span class="label-text pr-2">All</span>
      <input
        id="all"
        type="radio"
        value="all"
        name="radio"
        class="radio radio-accent"
        checked
        @change="filter"
      />
    </label>
  </div>
  <div class="form-control">
    <label for="completed" class="label cursor-pointer">
      <span class="label-text pr-2">Completed</span>
      <input
        id="completed"
        type="radio"
        value="completed"
        name="radio"
        class="radio radio-accent"
        @change="filter"
      />
    </label>
  </div>
  <div class="form-control">
    <label for="pending" class="label cursor-pointer">
      <span class="label-text pr-2">Pending</span>
      <input
        id="pending"
        type="radio"
        value="pending"
        name="radio"
        class="radio radio-accent"
        @change="filter"
      />
    </label>
  </div>
</template>
