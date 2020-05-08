<template>
  <div>
    <component :is="boundMod"></component>
    <button @click="pub">Do it</button>
  </div>
</template>

<script>
import Module from "poc-module1";
import { EventBus } from ".";

export default {
  props: {
    mod: String
  },
  components: {
    Module
  },
  computed: {
    boundMod() {
      return this.mod ? this.mod : "Module";
    }
  },
  methods: {
    pub() {
      EventBus.emit("do", "go");
    }
  }
};
</script>
