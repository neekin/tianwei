<template>
    <canvas ref='canv' id='canvas' :width="width" :height='height' @mousemove="mousemove" @mouseleave='mouseleave' @click='click'></canvas>
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
    },
    base:{
      default:null
    },
    area:{
      default:null
    }
  },
  data() {
    return {
      ctx: null,
      points: []
    };
  },
  methods: {
    init() {
      if (!this.ctx) {
        this.ctx = this.$refs.canv.getContext("2d");
      }
      this.ctx.strokeStyle = this.color;
    },
    mouseleave() {
      this.init();
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.draw();
    },
    mousemove(e) {
      this.init();
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
      var count = parseInt(this.points.length/2);
      // console.log(this.points);
       if(this.base){
        this.base.datum_line_point_cnt =count ;
       }else{
            this.area.surveyed_area_point_cnt=count;
       }
      this.draw();
    },
    draw() {
      this.init();
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
        x: parseInt( evt.clientX - rect.left),
        y: parseInt(evt.clientY - rect.top)
      };
    },
    drawline(x1, y1, x2, y2) {
      this.ctx.beginPath();
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      this.ctx.stroke();
    }
  },
  mounted(){
    if(this.base){
      this.points = this.base.datum_line_path_points;
    }else{
       this.points = this.area.surveyed_area_path_points;
    }
    this.draw();
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
