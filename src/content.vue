<template>
	<div class="wrapper" @click="update">
		<image :src="logoUrl" class="logo"></image>
		<text class="title">Hello {{target}} --- {{href}}</text>
		<text class="desc">Now, let's use vue to build your weex app. </text>
	</div>
</template>

<style>
	.wrapper {
		align-items: center;
		margin-top: 120px;
	}
	
	.title {
		padding-top: 40px;
		padding-bottom: 40px;
		font-size: 48px;
	}
	
	.logo {
		width: 360px;
		height: 156px;
	}
	
	.desc {
		padding-top: 20px;
		color: #888;
		font-size: 24px;
	}
</style>

<script>
	function getUrlParam(key) {
		var reg = new RegExp('[?|&]' + key + '=([^&]+)')
		var match = weex.config.bundleUrl.match(reg)
		return match && match[1]
	};
	export default {
		data: {
			logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
			target: 'World',
			href: '',
		},
		created() {
			this.href = getUrlParam("xx")
		},
		methods: {
			update: function(e) {
				this.target = 'Weex'
				console.log('target:', this.target)
			}
		}
	}
</script>