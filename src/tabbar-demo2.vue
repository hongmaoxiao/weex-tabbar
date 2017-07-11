<template>
	<div>
		<tabbar :tabItems="tabItems" @tabBarOnClick="tabBarOnClick"></tabbar>
	</div>
</template>

<script>
	var bundleUrl = new URL(weex.config.bundleUrl)
	var getURL = function(jsURL) {
		if(typeof(window) == 'undefined') {
			return bundleUrl.origin + jsURL
		} else {
			if(jsURL.indexOf('?') == -1) {
				jsURL += "?"
			}
			jsURL += "&t=" + new Date().getTime()
			return bundleUrl.origin + "/web/?page=" + encodeURI(jsURL)
		}
	}
	module.exports = {
		data: function() {
			return {
				dir: 'examples',
				tabItems: [],
			}
		},
		components: {
			tabbar: require('./components/include/tabbar.vue')
		},
		created: function() {
			var items = [{
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
			]
			for(var i = 0; i < items.length; i++) {
				var tabItem = items[i];
				tabItem.src = getURL(tabItem.src)
			}
			this.tabItems = items;
		},
		methods: {
			tabBarOnClick: function(e) {
				console.log('tabBarOnClick', e.index)
			}
		}
	}
</script>