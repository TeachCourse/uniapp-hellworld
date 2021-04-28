<template>
	<view class="content">
		<web-view :webview-styles="webviewStyles" :src="url"></web-view>
	</view>
</template>

<script>
	var link
	export default {
		data() {
			return {
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				},
				url: 'https://mp.weixin.qq.com/s/tO1yxFs2qNQlQ2bJ8vGzQA'
			}
		},
		onLoad: function(option) {
			link = option.link
			console.log('link=' + option.link)
			this.request()
		},
		onShow() {
			this.url =	uni.getStorageSync('wx_articleurl');
			this.create()
		},
		methods: {
			create(){
				var w = plus.webview.create(this.url,'tuijian',{top:'75px'});
				w.show(); // 显示窗口
			},
		},
		onUnload(){
			plus.webview.close('tuijian');
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
</style>
