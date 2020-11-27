<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">左边</div>
  </div>
</template>

<script>
import { sidebar } from "./components";
export default {
  name: "Layout",
  components: {
    sidebar,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
