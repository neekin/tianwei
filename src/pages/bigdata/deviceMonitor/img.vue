<template>
    <canvas ref='canv' id='canvas' :width="width" :height='height' :style='style' @mousemove="mousemove" @mouseleave='mouseleave' @click='click'></canvas>
</template>
<script>
export default {
  props: {
    width: {
      default: 230
    },
    height: {
      default: 230
    },
    color: {
      default: "red"
    },
    zIndex: {
      default: 0
    }
  },
  data() {
    return {
      ctx: null,
      style: {
        "z-index": this.zIndex
      },
      points: []
    };
  },
  methods: {
    test() {
    //   if (this.ctx == null) {
    //     // this.ctx = this.$refs.canv.getContext("2d");
    //     // this.ctx.strokeStyle = this.color;
    //     console.log(this.color);
    //   }
    },
    mouseleave() {
        this.ctx = this.$refs.canv.getContext("2d");
        this.ctx.strokeStyle = this.color;
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.draw();
    },
    mousemove(e) {
       this.ctx = this.$refs.canv.getContext("2d");
        this.ctx.strokeStyle = this.color;
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.draw();
      if (this.points.length > 0) {
        var px = this.points[this.points.length - 2];
        var py = this.points[this.points.length - 1];
        var mousePos = this.getMousePos(this.$refs.canv, e);
        this.drawline(px, py, mousePos.x, mousePos.y);
      }
    },
    click(e) {
      var mousePos = this.getMousePos(this.$refs.canv, e);
      this.points.push(mousePos.x, mousePos.y);
      console.log(this.points);
      this.draw();
    },
    draw() {
      this.ctx.clearRect(0, 0, this.width, this.height);
      for (var i = 2; i < this.points.length; i = i + 2) {
        var x1 = this.points[i - 2];
        var y1 = this.points[i - 1];
        var x2 = this.points[i];
        var y2 = this.points[i + 1];
        this.drawline(x1, y1, x2, y2);
      }
    },
    getMousePos(oContext, evt) {
      var rect = oContext.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
    },
    drawline(x1, y1, x2, y2) {
      this.ctx.beginPath();
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      this.ctx.stroke();
    }
  }
};
</script>
<style lang="less" scoped>
canvas {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
