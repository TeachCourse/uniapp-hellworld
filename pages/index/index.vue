<template>
	<view class="content">
		<view class="ban-zu">
			<text class="ban-zu-text">{{ban_zu_text}}</text>
			<view class="ban-zu-bianma">
				<input class="ban-zu-textarea" placeholder="请输入" type="text" :value="ban_zu_textarea" />
				<image class="ban-zu-img" src="../../static/scan.png" @click="scan"></image>
			</view>
		</view>
		<view class="ban-zu-des">
			<text class="ban-zu-des-text">{{ban_zu_des_text}}</text>
		</view>
		<!-- 		<view class="ban-zu">
			<uni-combox label="班次" labelWidth="200rpx" :candidates="candidates" placeholder="请选择所在班次"></uni-combox>
		</view>
		<view class="ban-zu">
			<uni-combox label="出勤类型" labelWidth="200rpx" :candidates="candidates2" placeholder="请选择出勤类型"></uni-combox>
		</view> -->
		<view class="ban-zu">
			<text class="ban-zu-text">班次</text>
			<tui-dropdown-list :show="dropdownShow" :top="94" :height="400" class="drop-down-list">
				<template v-slot:selectionbox>
					<view class="ban-ci">
						<input class="ban-ci-textarea" placeholder="请输入" :value="ban_ci_textarea"></input>
						<view class="tui-animation" :class="[dropdownShow?'tui-animation-show':'']"
							@click="dropDownList(-1,0)">
							<tui-icon name="turningdown" :size="20"></tui-icon>
						</view>
					</view>
				</template>
				<template v-slot:dropdownbox>
					<view class="tui-selected-list">
						<scroll-view scroll-y class="tui-dropdown-scroll">
							<block v-for="(item,index) in dropdownlistData" :key="index">
								<tui-list-cell padding="0" @click="dropDownList(item.name,0)"
									:unlined="dropdownlistData.length-1==index">
									<view class="tui-cell-class">
										<tui-icon :name="item.icon" :size="item.size" :color="item.color"></tui-icon>
										<text class="tui-ml-20">{{item.name}}</text>
									</view>

								</tui-list-cell>
							</block>
						</scroll-view>
					</view>
				</template>
			</tui-dropdown-list>
		</view>
		<view class="ban-zu">
			<text class="ban-zu-text">出勤类型</text>
			<tui-dropdown-list :show="dropdownShow2" :top="94" :height="400" class="drop-down-list">
				<template v-slot:selectionbox>
					<view class="ban-ci">
						<input class="ban-ci-textarea" placeholder="请输入" :value="chu_qin_textarea"></input>
						<view class="tui-animation" :class="[dropdownShow2?'tui-animation-show':'']"
							@click="dropDownList(-1,1)">
							<tui-icon name="turningdown" :size="20"></tui-icon>
						</view>
					</view>
				</template>
				<template v-slot:dropdownbox>
					<view class="tui-selected-list">
						<scroll-view scroll-y class="tui-dropdown-scroll">
							<block v-for="(item,index) in dropdownlistData" :key="index">
								<tui-list-cell padding="0" @click="dropDownList(item.name,1)"
									:unlined="dropdownlistData.length-1==index">
									<view class="tui-cell-class">
										<tui-icon :name="item.icon" :size="item.size" :color="item.color"></tui-icon>
										<text class="tui-ml-20">{{item.name}}</text>
									</view>

								</tui-list-cell>
							</block>
						</scroll-view>
					</view>
				</template>
			</tui-dropdown-list>
		</view>
		<view class="ban-zu">
			<button type="primary" class="commit-btn">提交</button>
		</view>
	</view>
</template>

<script>
	import getdata from '../../data/json.js' //getdata是自己定义的名字
	import permision from "@/common/permission.js"
	export default {
		data() {
			return {
				chu_qin_textarea: '',
				ban_ci_textarea: '',
				proDropIndex: -1,
				ban_zu_text: '班组编号',
				ban_zu_textarea: 'hi',
				ban_zu_des_text: '班组名称',
				candidates: ['早班', '晚班'],
				candidates2: ['上班', '下班'],
				city: '',
				dropdownShow: false,
				dropdownShow2: false,
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
				}]
			}
		},
		onLoad() {},
		methods: {
			dropDownList(index, type) {
				switch (type) {
					case 0:
						this.type = 0;
						this.dropdownShow = !this.dropdownShow;
						if (index !== -1) {
							this.ban_ci_textarea = index;
						}
						break
					case 1:
						this.type = 1;
						this.dropdownShow2 = !this.dropdownShow2;
						if (index !== -1) {
							this.chu_qin_textarea = index;
						}
						break
					default:
						break;
				}
				if (index !== -1) {
					uni.showToast({
						title: "index：" + index,
						duration: 2000
					})
				}
			},
			onInput(e) {
				console.log(e.detail)
				this.number = e.detail
			},
			async scan() {
					// #ifdef APP-PLUS
					let status = await this.checkPermission();
					if (status !== 1) {
						return;
					}
					// #endif
					uni.scanCode({
						success: (res) => {
							console.log('条码内容：' + res.result);
							this.ban_zu_textarea = res.result
						},
						fail: (err) => {
							// 需要注意的是小程序扫码不需要申请相机权限
						}
					});
				}
				// #ifdef APP-PLUS
				,
			async checkPermission(code) {
				let status = permision.isIOS ? await permision.requestIOS('camera') :
					await permision.requestAndroid('android.permission.CAMERA');

				if (status === null || status === 1) {
					status = 1;
				} else {
					uni.showModal({
						content: "需要相机权限",
						confirmText: "设置",
						success: function(res) {
							if (res.confirm) {
								permision.gotoAppSetting();
							}
						}
					})
				}
				return status;
			}
			// #endif
		}
	}
</script>

<style>
	.tui-animation {
		display: inline-block;
		transform: rotate(0deg);
		transition: all 0.2s;
	}

	.tui-animation-show {
		transform: rotate(180deg);
	}

	.drop-down-list {
		margin-left: 0rpx;
		flex: 1;
	}

	.ban-ci {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border: #C8C7CC;
		border-width: 1rpx;
		border-style: solid;
		padding: 10rpx;
		flex: 1;
	}

	.content {
		display: flex;
		flex-direction: column;
	}

	.ban-zu-bianma {
		flex: 1;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.ban-zu {
		margin: 10rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.ban-zu-des {
		margin: 10rpx;
		display: flex;
		flex-direction: row;
	}

	.ban-zu-img {
		height: 50rpx;
		width: 50rpx;
	}

	.ban-zu-textarea {
		height: auto;
		border-radius: 2rpx;
		border-color: #C8C7CC;
		border-style: double;
		border-width: 1rpx;
		padding: 10rpx;
		margin-right: 36rpx;
	}

	.ban-zu-text {
		width: 200rpx;
	}

	.commit-btn {
		width: auto;
		position: fixed;
		left: 0rpx;
		bottom: 128rpx;
		margin: 20rpx;
		right: 0rpx;
	}
</style>
