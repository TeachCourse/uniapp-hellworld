<template>
	<view class="content">
		<tui-list-view class="list">
			<tui-list-cell v-for="(item,index) in dropdownlistData" :key="index" padding="0"
				@click="dropDownList(item)" :unlined="dropdownlistData.length-1==index" :arrow="true">
				<view class="tui-cell-class">
					<!-- <tui-icon :name="item.icon" :size="item.size" :color="item.color"></tui-icon> -->
					<text class="tui-ml-20">{{item.title}}</text>
				</view>
			</tui-list-cell>
		</tui-list-view>
	</view>
</template>

<script>
	var _this
	var id = '408';
	var page = 1;
	export default {
		data() {
			return {
				dropdownlistData: [{
					title: "微信支付",
					icon: "wechat",
					color: "#80D640",
					size: 30
				}],
			}
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			_this = this
			id = option.id
			page = option.page
			console.log('id=' + id + ';page=' + page)
			this.request()
		},
		methods: {
			dropDownList(item) {
				if (item!=null) {
			       uni.navigateTo({
			       	url:'../webview/webview?link='+item.link
			       })
				}
			},
			request: function() {
				_this.loading = "加载中...";
				uni.showNavigationBarLoading();
				uni.request({
					url: '/wan/wxarticle/list/' + id + '/' + page + '/json',
					method: 'GET',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: (res) => {
						uni.hideNavigationBarLoading();
						// JSON字符串转JSON对象，使用JSON.parse()
						console.log(JSON.stringify(res))
						let text = JSON.stringify(res.data.data.datas);
						if (res.statusCode == 200) {
							this.dropdownlistData = JSON.parse(text)
						} else {
							this.result = `加载数据失败，请检查网络或地址！`
						}
					},
					fail: (res) => {
						uni.hideNavigationBarLoading();
						console.log(JSON.stringify(res))
						this.result = `加载数据失败，请检查网络或地址！`
					}
				})
			}
		}
	}
</script>

<style>
	.tui-ml-20 {
		text-overflow: ellipsis;
	}

	.content {
		display: flex;
		flex-direction: column;
		/* 		justify-content: space-between;
		align-items: center; */
	}

	.list {
		margin: 10rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	.error-msg {
		position: fixed;
		bottom: 0rpx;
		left: 0rpx;
		right: 0rpx;
	}
</style>
