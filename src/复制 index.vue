<template>
	<div style="flex-direction: column;">
		<tabbar :tabItems="tabItems" @tabBarOnClick="tabBarOnClick"></tabbar>
	</div>
</template>

<script>
	var getURL = function(jsURL) {
		var bundleUrl = new URL(weex.config.bundleUrl)
		if(typeof(window) == 'undefined') {
			return bundleUrl.origin + "/" + jsURL
		} else {
			if(jsURL.indexOf('?') == -1) {
				jsURL += "?"
			}
			jsURL += "&t=" + new Date().getTime()
			return bundleUrl.origin + "/web/?page=" + encodeURI(jsURL.replace('.js','.web.js'))
		}
	}
	module.exports = {
		data: function() {
			return {
				dir: 'examples',
				tabItems: [{
						index: 0,
						title: 'tab1',
						titleColor: '#000000',
						icon: '',
						image: 'http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png',
						selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB16jjPMpXXXXazXVXX9t7RGVXX-46-46.png',
						src: '/dist/content.js?xx=a',
						visibility: 'visible',
					},
					{
						index: 1,
						title: 'tab2',
						titleColor: '#000000',
						icon: '',
						image: 'http://gtms03.alicdn.com/tps/i3/TB1LEn9MpXXXXaUXpXX9t7RGVXX-46-46.png',
						selectedImage: 'http://gtms02.alicdn.com/tps/i2/TB1qysbMpXXXXcnXXXX9t7RGVXX-46-46.png',
						src: '/dist/content.js?xx=v',
						visibility: 'hidden',
					},
					{
						index: 2,
						title: 'tab3',
						titleColor: '#000000',
						icon: '',
						image: 'http://gtms01.alicdn.com/tps/i1/TB1B0v5MpXXXXcvXpXX9t7RGVXX-46-46.png',
						selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB1NxY5MpXXXXcrXpXX9t7RGVXX-46-46.png',
						src: '/dist/list.js',
						visibility: 'hidden',
					}
				],
			}
		},
		components: {
			tabbar: typeof(window) == 'undefined' ? require('./components/include/tabbar.vue') : require('./components/include/tabbar-web.vue')
		},
		created: function() {
			for(var i = 0; i < this.tabItems.length; i++) {
				var tabItem = this.tabItems[i];
				tabItem.src = getURL(tabItem.src)
				console.log(tabItem.src)
			}
		},
		methods: {
			tabBarOnClick: function(e) {
				console.log('tabBarOnClick', e.index)
			}
		}
	}
</script>