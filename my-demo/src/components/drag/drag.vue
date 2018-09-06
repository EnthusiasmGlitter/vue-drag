<template>
  <div class="drag">
   <div class="item"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue, Emit } from "vue-property-decorator";

@Component
export default class Drag extends Vue {
  
  
}

</script>

<style lang="scss" scoped>
.drag {
  .item{
    width: 10px;
    height: 10px;
    border: 1px solid #000;
  }
}
</style>


