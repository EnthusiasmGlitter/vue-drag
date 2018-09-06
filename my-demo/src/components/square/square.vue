<template>
  <div class="square">
    <div class="box" ref="box">
      <div class="item" v-for="(item, index) in items" ref="el" @mousedown="action($event)"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Square extends Vue {
  items: number = 100;
  setLeft: number = Math.floor((400 - 30 - 10) * Math.random()) + 20;
  setTop: number = Math.floor((400 - 30 - 10) * Math.random()) + 20;
  startX: number = null;
  startY: number = null;
  newX: number = null;
  newY: number = null;
  oldX: number = null;
  oldY: number = null;

  mounted() {
    this.init();
    this.action(Event);
  }

  init() {
    const box: any = this.$refs.box;
    const items: any = this.$refs.el;
    let width = window.getComputedStyle(box).width;
    let height = window.getComputedStyle(box).height;
    let box_width: number = parseInt(width.replace("px", ""));
    let box_height: number = parseInt(height.replace("px", ""));

    for (let item of items) {
      const wid: string = window.getComputedStyle(item).width;
      const hei: string = window.getComputedStyle(item).height;
      let item_width: number = parseInt(wid.replace("px", ""));
      let item_height: number = parseInt(hei.replace("px", ""));
      let random_l: number =
        Math.floor((box_width - 30 - item_width) * Math.random()) + 20;
      let random_t: number =
        Math.floor((box_height - 30 - item_height) * Math.random()) + 20;
      item.style.left = random_l + "px";
      item.style.top = random_t + "px";
      this.oldX = random_l;
      this.oldY = random_t;
    }
  }

  action(event: any) {
    this.startX = event.pageX - this.oldX;
    this.startY = event.pageY - this.oldY;

    document.onmousemove = e => {
      // o.left = event.pageX;
      // o.top = event.pageY;
    };
    document.onmouseup = e => {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  }
}

let o = {};

// let odiv = event.target;
// console.log(event.target);
let con = document.querySelector('.box');
console.log(con);


Object.defineProperty(o, "left", {
  set: val => {
    this.newX = -(this.startX - val);
    this.oldX = this.newX;
    // odiv.style.left = this.oldX;
  },
  get: () => this.newX
});

Object.defineProperty(o, "top", {
  set: val => {
    this.newY = -(this.startY - val);
    this.oldY = this.newY;
    // odiv.style.left = this.oldY;
  },
  get: () => this.newY
});
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #000;
  margin: 30px auto;
  .item {
    position: absolute;
    width: 10px;
    height: 10px;
    border: 1px solid #000;
  }
}
</style>
