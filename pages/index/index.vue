<template>
	<view class="content">

		<view class="title">
			<image class="logo" src="/static/logo.png"></image>
			<!-- #ifdef H5 -->
			<text>Todos on web</text>
			<!-- #endif -->

			<!-- #ifdef MP-WEIXIN -->
			<text>Todos on wechat</text>
			<!-- #endif -->

		</view>
		<view class="addBtn" @tap="showed = true">Add new todo</view>
		<view class="todoList">
			<view v-if="todoList.length == 0" style="text-align: center;">You have nothing todo</view>
			<view v-else>
				<view v-for="(item,index) in todoList" :key="index" class="todoItem" @tap="finishTodo(index)">
					<view class="index">
						{{index + 1}}
					</view>
					<view class="item">
						<view class="time">创建时间:{{formatData(item.time)}}</view>
						<view class="msg" :style="item.finished ? 'text-decoration-line: line-through; color: #555555;':'' ">
							{{item.msg}}
						</view>
					</view>
				</view>
			</view>
		</view> <!-- todoList end -->

		<view class="addPanel" v-show="showed">
			<view class="panel">
				<view class="panelTitle">Add a new todo</view>
				<!-- <input type="text" v-model="msg" /> -->
				<textarea v-model="msg" />
				<button type="primary" @tap="addNewTodo()">确定</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				todoList: [{
					time: 1551334252272,
					msg: "第一条第一条第一条第一条第一条第一条第一条第一条第一条第一条第一条第一条第一条第一条第一条第一条第一条第一条第一条第一条第一条第一条第一条第一条",
					finished: false
				}, {
					time: 1551334252272,
					msg: "第二条",
					finished: true
				}],
				delStyle: "text-decoration-line: line-through;",
				showed:false,
				msg: ""
			}
		},
		onLoad() {

		},
		computed:{
			formatData(){
				return function(time){
					return this.formatDataFn(time)
				}
			}
		},
		methods: {
			formatDataFn:function (time){
				let timestamp = new Date(time);
				let year=timestamp.getFullYear();  //取得4位数的年份
				let month=timestamp.getMonth()+1;  //取得日期中的月份，其中0表示1月，11表示12月
				let date=timestamp.getDate();      //返回日期月份中的天数（1到31）
				let hour=timestamp.getHours();     //返回日期中的小时数（0到23）
				let minute=timestamp.getMinutes(); //返回日期中的分钟数（0到59）
				let second=timestamp.getSeconds(); //返回日期中的秒数（0到59）
				return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;
			},
			finishTodo: function(index) {
				console.log(this.todoList[index])
				if (this.todoList[index].finished == false)
					// 未完成的更改为已完成
					this.$set(this.todoList[index], "finished", true);
				// 将已完成的删除
				else this.todoList.splice(index, 1);
				
				// 更新列表
				// this.formatList()
			},
			addNewTodo: function() {
				let newTodo = {
					time:Date.parse(new Date()),
					msg:this.msg,
					finished:false
				}
				this.todoList.splice(this.todoList.length,0,newTodo)
				this.msg = ''
				this.showed = false
			},
			formatList:function(){
				for (let i = 0; i < this.todoList.length; i++) {
					
					if(this.todoList[i].finished ){
						// 把已完成的放置到列表末尾
						let item = this.todoList.splice(i,1)[0]
						this.todoList.push(item)
					}
				}
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		position: relative;

		.title {
			position: relative;

			.logo {
				position: absolute;
				top: 50%;
				left: 50%;
				z-index: -1;
				transform: translate(-50%, -50%);
				width: 100px;
				height: 100px;
			}

			>text {
				display: block;
				width: 100%;
				line-height: 150px;
				text-align: center;
				font-size: 1.4rem;
				font-weight: 600;
				color: #151965;
				text-shadow: 3px 3px 3px #46b5d1;
			}
		}

		.addBtn {
			width: 50%;
			margin: 10px auto;
			padding: 10px 5px;
			text-align: center;
			background-color: #46b3e6;
			color: #dff6f0;
			text-shadow: 3px 3px 3px #2e279d;
			border-radius: 4px;
			box-shadow: 3px 3px 3px #4d80e4;
		}

		.todoList {
			box-sizing: border-box;
			margin: 10px;
			padding: 2px;
			// background-color: #007AFF;
		}

		.todoItem {
			display: flex;
			border-bottom: 1px solid #C8C7CC;
			padding: 5px;

			&:last-child {
				border: none;
			}

			// justify-content: ;
			.index {
				width: 5%;
				min-width: 30px;
				text-align: center;

				// &::before {
				// 	display: inline-block;
				// 	content: "";
				// 	height: 100%;
				// 	vertical-align: middle;
				// }
			}

			.time {
				font-size: .8rem;
			}
			.msg{
				// 强制换行
				word-break: break-all;
			}
		}

		.addPanel {
			position: absolute;
			width: 100%;
			min-height: 100%;
			left: 0;
			top: 0;
			background-color: rgba(0, 0, 0, 0.3);
			z-index: 10;

			.panel {
				box-sizing: border-box;
				position: absolute;
				top: 50%;
				left: 50%;
				width: 80%;
				z-index: 11;
				transform: translate(-50%, -50%);
				background-color: #F1F1F1;
				padding: 20px;
				border-radius: 5px;
				
				.panelTitle{
					text-align: center;
				}
				> textarea {
					box-sizing: border-box;
					width: 100%;
					margin: 10px auto;
					border: 1px solid #C0C0C0;
					border-radius: 3px;
				}
			}
		}

	}
</style>
