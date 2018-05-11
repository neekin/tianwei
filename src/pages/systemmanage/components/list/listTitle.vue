<template>
	<th>
		{{title}}
	</th>
</template>
<script>
	export default{

		data(){
			return {
				title:this.msg
			}
		},
		props:['msg']
	}
</script>
<style>
	
</style>