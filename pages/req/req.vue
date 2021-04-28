<template>
	<view class="content">
		<tui-list-view class="list">
			<tui-list-cell v-for="(item,index) in dropdownlistData" :key="index" padding="0" @click="dropDownList(item)"
				:unlined="dropdownlistData.length-1==index" :arrow="true">
				<view class="tui-cell-class">
					<!-- <tui-icon :name="item.icon" :size="item.size" :color="item.color"></tui-icon> -->
					<text class="tui-ml-20">{{item.name}}</text>
				</view>
			</tui-list-cell>
		</tui-list-view>
		<!-- <tui-button class="error-msg" type="white" shape="circle" @click="request()">带loading请求</tui-button> -->
	</view>
</template>

<script>
	var _this;
	var page = 1;
	var timer = null;
	export default {
		data() {
			return {
				dropdownlistData: [{
					name: "微信支付",
					icon: "wechat",
					color: "#80D640",
					size: 30
				}, {
					name: "支付宝支付",
					icon: "alipay",
					color: "#00AAEE",
					size: 30
				}, {
					name: "银行卡支付",
					icon: "bankcard-fill",
					color: "#ff7900",
					size: 28
				}, {
					name: "微信支付",
					icon: "wechat",
					color: "#80D640",
					size: 30
				}, {
					name: "支付宝支付",
					icon: "alipay",
					color: "#00AAEE",
					size: 30
				}, {
					name: "银行卡支付",
					icon: "bankcard-fill",
					color: "#ff7900",
					size: 28
				}],
				result: '带loading请求',
				content: ''
			}
		},
		onLoad: function() { //页面第一次加载是会触发，可以把一些不需要实时更新的数据放入
			_this = this;
			this.request();
		},
		onPullDownRefresh: function() { //监听用户下拉刷新的功能
			this.request(); //刷新之后给触发request()函数;
		},
		methods: {
			dropDownList(item) {
				if (item != null) {
					uni.navigateTo({
						url: '../artdet/artdet?id=' + item.id + '&page=' + page
					})
				}
			},
			request: function() {
				_this.loading = "加载中...";
				uni.showNavigationBarLoading();
				uni.request({
					url: '/wan/wxarticle/chapters/json',
					method: 'GET',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: (res) => {
						uni.hideNavigationBarLoading();
						// JSON字符串转JSON对象，使用JSON.parse()
						console.log(JSON.stringify(res))
						if (res.statusCode == 200) {
							let text = JSON.stringify(res.data.data);
							this.dropdownlistData = JSON.parse(text)
						} else {
							this.result = `加载数据失败，请检查网络或地址！${JSON.stringify(res.errMsg)}`
						}
					},
					fail: (res) => {
						uni.hideNavigationBarLoading();
						console.log(JSON.stringify(res))
						this.result = `加载数据失败，请检查网络或地址！${JSON.stringify(res.errMsg)}`
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
