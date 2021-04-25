<template>
	<view class="content">
		<view class="ban-zu">
			<text class="ban-zu-text">{{ban_zu_text}}</text>
			<view class="sel-date">
				<input class="chu-qin-date-sta" type="text" placeholder="请选择" :value="result_sta" />
				<tui-icon class="chu-qin-icon" :name="proDropIndex==0?'arrowup':'arrowdown'" :size="14"
					:color="proDropIndex==0?'#5677fc':'#444'" @click="selectDate(0)"></tui-icon>
			</view>
			<text class="ban-zu-text">到</text>
			<view class="sel-date">
				<input class="chu-qin-date-sta" type="text" placeholder="请选择" :value="result_end">
				<tui-icon class="chu-qin-icon" :name="[proDropIndexEnd?'arrowup':'arrowdown']" :size="14"
					:color="[proDropIndexEnd?'#5677fc':'#444']" @click="selectDate(1)"></tui-icon>
			</view>
			<button type="primary" class="que-btn">查询</button>
		</view>

		<scroll-view scroll-x="true" class="kite-classify-scroll">
			<view class="box">
				<t-table @change="change">
					<t-tr>
						<t-th>序号</t-th>
						<t-th>班组名称</t-th>
						<t-th>班次</t-th>
						<t-th>出勤类型</t-th>
						<t-th>出勤时间</t-th>
					</t-tr>
					<t-tr v-for="item in tableList" :key="item.id">
						<t-td>{{ item.id + 1 }}</t-td>
						<t-td>{{ item.name }}</t-td>
						<t-td>{{ item.age }}</t-td>
						<t-td>{{ item.hobby }}</t-td>
						<t-td>{{ item.time }}</t-td>
					</t-tr>
				</t-table>
			</view>
		</scroll-view>

		<!--底部弹出选择-->
		<tui-calendar ref="calendar" lunar isFixed :type="1" @change="change"></tui-calendar>
	</view>
</template>

<script>
	import tTable from '@/components/t-table/t-table.vue';
	import tTh from '@/components/t-table/t-th.vue';
	import tTr from '@/components/t-table/t-tr.vue';
	import tTd from '@/components/t-table/t-td.vue';
	export default {
		components: {
			tTable,
			tTh,
			tTr,
			tTd
		},
		data() {
			return {
				tableList: [{
						id: 0,
						name: '张三',
						age: '19',
						hobby: '游泳',
						time: '2021-4-12'
					},
					{
						id: 1,
						name: '李四',
						age: '21',
						hobby: '绘画',
						time: '2021-4-13'
					},
					{
						id: 2,
						name: '王二',
						age: '29',
						hobby: '滑板',
						time: '2021-4-14'
					},
					{
						id: 3,
						name: '码字',
						age: '20',
						hobby: '蹦极',
						time: '2021-4-15'
					}
				],
				proDropIndex: -1,
				proDropIndexEnd: false,
				ban_zu_text: '出勤时间',
				result_sta: '',
				result_end: '',
				type: 0
			}
		},
		onLoad() {

		},
		methods: {
			//uni-app 方法调用
			selectDate(type) {
				switch (type) {
					case 0:
						this.type = 0;
						this.proDropIndex = 0;
						break
					case 1:
						this.type = 1;
						this.proDropIndexEnd = !this.proDropIndexEnd;
						break
					default:
						break;
				}
			    // 调用组件内的方法：$refs
				this.$refs.calendar.show();
			},
			change(e) {
				//选择结果
				console.log(e);
				if (this.type == 0) {
					this.result_sta = e.result;
					this.proDropIndex = 1;
				} else {
					this.result_end = e.result;
					this.proDropIndexEnd = !this.proDropIndexEnd;
				}
			},
			edit(item) {
				uni.showToast({
					title: item.name,
					icon: 'none'
				});
			},
			onInput(e) {
				console.log(e.detail)
				this.number = e.detail
			}
		}
	}
</script>

<style>
	.kite-classify-scroll {
		width: 100%;
		height: auto;
		overflow: hidden;
		white-space: nowrap;
	}

	.box {
		display: inline-block;
		width: 1000upx;
		height: auto;
		margin-right: 30upx;
	}

	.que-btn {
		width: 150rpx;
		font-size: small;
		padding: 0rpx;
		margin-left: 10rpx;
		height: auto;
	}

	.chu-qin-date-sta {
		width: auto;
		padding: 5rpx;
		text-align: center;
		font-size: 28rpx;
	}

	.sel-date {
		width: 180rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-left: 20rpx;
		border: #8F8D8E;
		border-style: double;
		border-width: 1rpx;
	}

	.content {
		display: flex;
		flex-direction: column;
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

	.ban-zu-textarea {
		height: auto;
		border-radius: 2rpx;
		border-color: #C8C7CC;
		border-style: double;
		border-width: 1rpx;
		padding: 10rpx;
	}

	.ban-zu-text {
		width: auto;
	}

	.commit-btn {
		width: auto;
		position: fixed;
		left: 0rpx;
		bottom: 0rpx;
		margin: 20rpx;
		right: 0rpx;
	}
</style>
