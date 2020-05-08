<template>
  <div>
    <h1>Hello from Module 2</h1>
    <p>{{count}}</p>
  </div>
</template>

<script>
import { EventBus } from "poc-core";

export default {
  data: () => ({ count: 2 }),
  created() {
    EventBus.on("do", () => {
      this.count = this.count * this.count;
    });
  }
};
</script>
