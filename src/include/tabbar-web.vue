<template>
	<div style="flex: 1;">
		<div style="flex: 1;">
			<embed v-for="(item , i) in tabItems" :src="item.src" :key="i" :style="{ display: item.visibility == 'visible' ? '':'none', flex:1}"></embed>
		</div>
		<div style="height: 88;">
			<div style="flex-direction: row; align-items: center; justify-content: space-around; flex: 1;">
				<tabitem v-for="item in tabItems" :key="item.index" :index="item.index" :icon="item.icon" :title="item.title" :titleColor="item.titleColor" @tabItemOnClick="tabItemOnClick"></tabItem>
			</div>
		</div>
	</div>
</template>
<script>
	module.exports = {
		props: {
			tabItems: {
				default: []
			},
			selectedColor: {
				default: '#ff0000'
			},
			unselectedColor: {
				default: '#000000'
			}
		},
		data: function() {
			return {
				selectedIndex: 0
			}
		},
		components: {
			tabitem: require('./tabitem.vue')
		},
		created: function() {
			this.select(this.selectedIndex);
		},
		methods: {
			tabItemOnClick: function(e) {
				this.selectedIndex = e.index;
				this.select(e.index);
				this.$emit('tabBarOnClick', e);
			},
			select: function(index) {
				for(var i = 0; i < this.tabItems.length; i++) {
					var tabItem = this.tabItems[i];
					if(i == index) {
						tabItem.icon = tabItem.selectedImage;
						tabItem.titleColor = this.selectedColor;
						tabItem.visibility = 'visible';
					} else {
						tabItem.icon = tabItem.image;
						tabItem.titleColor = this.unselectedColor;
						tabItem.visibility = 'hidden';
					}
				}
			},
		}
	}
</script>