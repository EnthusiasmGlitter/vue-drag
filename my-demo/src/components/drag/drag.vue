<template>
  <div class="drag">
   <div class="item">msg</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue, Emit } from "vue-property-decorator";

@Component
export default class Drag extends Vue {
  msg: string = "hello";
}
</script>

<style lang="scss" scoped>
.drag {
  .item {
    width: 10px;
    height: 10px;
    border: 1px solid #000;
  }
}
</style>


