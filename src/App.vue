<template>
  <div id="app" :class='{"hidesidbar":hidesidbar,"hidenav":hidenav}'>
    	<a href="#" class="hidebtn hideleft" @click='hideleft'></a>
			<a href="#" class="hidebtn hidetop" @click='hidetop'></a>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      hidesidbar:false,
      hidenav:false
    } 
  },
  methods:{
     hideleft(){
           this.hidesidbar = !this.hidesidbar;
			},
			hidetop(){
				  this.hidenav =!this.hidenav;
			}
  }
}
</script>

<style>

.hidebtn{
	position: fixed;
	background-color: #004C94;
	border-radius: 2px;
	height: 32px;
	width: 32px;
	line-height: 32px;
	margin-top:10px;
	margin-left: 12px;
	background-position: center center;
	
  background-repeat: no-repeat;
  z-index: 99;
  top:0;
  transition: all 1s;
}
.hideleft{
	background-image: url(/static/right-arrow.png);
  left:200px;
  background-size: 19px 16px;
}
.hidetop{
		background-image: url(/static/top-arrow.png);
    left:240px;
    background-size: 16px 19px;
}
.hidesidbar .hideleft{
  left:10px;
}
.hidesidbar .hidetop{
  left:50px;
}
</style>
