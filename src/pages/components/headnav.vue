<template>
    <div class='headnav clearfix'>
    	<a href="#" class="hidebtn" @click='hide'>隐藏</a>
	    <div class="title">
	      广州天威后台
	    </div>
	    <div class="logout">
	    
	    	欢迎你~ 	<span class="username">
	    		{{username}}
	    	</span>
	    	<a href="#" @click='logout'>
	    	<span class="fa fa-power-off"></span> 退出登陆
	    </a>
	    </div>
    </div>
</template>
<script>
export default {
    methods:{
    	logout(){
    		this.$store.commit("updateToken", '');
    		this.$router.push('/login')
    	},
    	hide(){

    	}

    },
    data(){
    	return {
    		username :''
    	}
    },
    mounted(){
    	this.username = this.$store.state.username;
    }
};
</script>
<style>
.headnav{
	min-width: 600px;
}
.headnav .title {
  font-family: MicrosoftYaHei-Bold;
  font-size: 18px;
  color: #ffffff;
  padding-left: 20px;
  float: left;
}
.logout
{
	font-family: MicrosoftYaHei;
	font-size: 14px;
	color: rgba(255,255,255,0.9);
	float: right;
	padding-right: 40px;
}
.logout .username{
	font-family: MicrosoftYaHei-Bold;
	font-size: 14px;
	color: #FFFFFF;
	margin-right: 40px;
}
.logout a{
	font-family: MicrosoftYaHei;
	font-size: 14px;
	color: rgba(255,255,255,0.9);
}

.hidebtn{
	float: left;
	background: #004C94;
	border-radius: 2px;
	height: 32px;
	width: 32px;
	line-height: 32px;
	margin-top:10px;
}
</style>


