<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>

		<view class="title">
			<image class="logo" src="/static/logo.png"></image>
			<!-- #ifdef H5 -->
			<text>Todos on web</text>
			<!-- #endif -->

			<!-- #ifdef MP-WEIXIN -->
			<text>Todos on wechat</text>
			<!-- #endif -->

			<!-- #ifdef APP-PLUS -->
			<text>Todos on App</text>
			<!-- #endif -->

		</view>
		<view class="addBtn" @tap="showed = true">Add new todo</view>
		<view class="todoList">
			<view v-if="todoList.length == 0" style="text-align: center;">You have nothing todo</view>
			<view v-else>
				<view v-for="(item,index) in todoList" :key="index" class="todoItem" @tap="changeTodoStatus(index)">
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
	import { mapState, mapActions } from 'vuex'
	
	export default {
		data() {
			return {
				delStyle: "text-decoration-line: line-through;",
				showed:false,
				msg: ""
			}
		},
		onLoad() {
			console.log(this)
		},
		computed:{
			...mapState(['todoList','unfinishedLength']),
			formatData(){
				return time =>
				new Date(time).toLocaleString()
			}
		},
		methods: {
			...mapActions(['addTodo','finishTodo','delTodo','getLocalStorage']),
			changeTodoStatus: function(index) {
				// console.log(this.todoList[index])
				if (this.todoList[index].finished == false)
					// 未完成的更改为已完成
					// this.$set(this.todoList[index], "finished", true);
					this.finishTodo(index)
				// 将已完成的删除
				else this.delTodo(index)
				
				uni.setStorageSync('keep-vuex',{
					 ...mapState(['todoList','unfinishedLength'])
				})
			},
			addNewTodo: function() {
				 if(this.msg == ""){
					 this.showed = false
				 }else{
					 let newTodo = {
					 	time:Date.parse(new Date()),
					 	msg:this.msg,
					 	finished:false
					 }
					 this.addTodo(newTodo)
				 }
				 this.msg = ''
				 this.showed = false
				 uni.setStorageSync('keep-vuex',{
					 todoList:this.todoList,
					 unfinishedLength:this.unfinishedLength
				})
			}
		},
		onLoad() {
			// 读取数据
			let localData = uni.getStorageSync('keep-vuex') || null
			if(localData !== null){
				// console.log(localData)
				this.getLocalStorage(localData)
			}
		}
	}
</script>

<style lang="scss" scoped>
.status_bar {
      height: var(--status-bar-height);
      width: 100%;
  }
	.content {
		position: relative;
		min-height: 100vh;

		.title {
			position: relative;
			height: 150px;
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
				top: 50vh;
				left: 50vw;
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
