<template>
    <canvas ref='canv' id='canvas'
            :width="width"
            :height='height'
            @mousemove="mousemove"
            @mouseleave='mouseleave'
            @click='click'
            @contextmenu="test"
            @dblclick="dblclick"

    ></canvas>
</template>
<script>
export default {
  props: {
    width: {
      default: 320
    },
    height: {
      default: 240
    },
    color: {
      default: "red"
    },
    zIndex: {
      default: 0
    },
    base: {
      default: null
    },
    area: {
      default: null
    },
    dev: {
      default: null
    },
    'points':{
      default:Array
    }
  },
  data() {
    return {
      ctx: null,
      // points: [],
      isDraw: false
    };
  },
  methods: {
    init() {
      // console.log(this.isDraw)
      if (!this.ctx) {
        this.ctx = this.$refs.canv.getContext("2d");
      }
      this.ctx.strokeStyle = this.color;
    },
    dblclick(e) {
      this.click(e);
      this.dontDraw();
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
        if (this.isDraw) {
          this.drawline(px, py, mousePos.x, mousePos.y);
        }
      }
    },
    click(e) {
      //  console.log(this.points);
      var mousePos = this.getMousePos(this.$refs.canv, e);
      if (this.points.length == 20) {
        this.dontDraw();
      }
      if (this.points.length < 20 && this.isDraw) {
        console.log(this.points);
        this.points.push(mousePos.x, mousePos.y);
      }
      this.draw();
    },
    test(e) {
      e.preventDefault();
      if (e.button == 2) {
        this.dontDraw();
        // if (this.base) {
        //   this.dev.datum_line_config.datum_line_path_points = this.points;
        // } else {
        //   this.dev.surveyed_area.surveyed_area_path_points = this.points ;
        // }
        this.draw();
      }
    },
    canDraw() {
      this.isDraw = true;
    },
    dontDraw() {
      this.isDraw = false;
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
        x: parseInt(evt.clientX - rect.left),
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
  mounted() {
    // console.log('base',this.base)
    // console.log('area',this.area)
    // if (this.base) {
    //   this.points = this.dev.datum_line_config.datum_line_path_points;
    // } else {
    //    console.log('区域初始化')
    //    this.points = this.dev.surveyed_area.surveyed_area_path_points;
    //    console.log(this.points)
    // }
    // if (!this.points) {
    //   if (this.base) {
    //     this.dev.datum_line_config.datum_line_path_points = [];
    //     this.points = this.dev.datum_line_config.datum_line_path_points 
    //   } else {
    //     console.log('区域初始化')
    //     this.dev.surveyed_area.surveyed_area_path_points = [];
    //     this.points = this.dev.surveyed_area.surveyed_area_path_points ;
    //      console.log(this.points)
    //   }
    // }
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
