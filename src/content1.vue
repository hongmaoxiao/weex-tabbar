<template>
	<div style="background-color: #AFDDFF;">
		<text @click="click">this is content1 vue, Click me</text>
		<text v-for="v in messages">{{v}}</text>
	</div>
</template>

<script>
	export default {
		data:{
			messages:[]
		},
		methods:{
			click(){
				this.messages.push(new Date())
				console.log('1111111')
			}
		}
	}
</script>

<style>
</style>