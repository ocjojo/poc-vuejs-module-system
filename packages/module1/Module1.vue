<template>
  <div>
    <h1>Hello from Module 1</h1>
    <p>{{count}}</p>
  </div>
</template>

<script>
import { EventBus } from "poc-core";

export default {
  data: () => ({ count: 0 }),
  created() {
    EventBus.on("do", () => {
      this.count = this.count + 1;
    });
  }
};
</script>
