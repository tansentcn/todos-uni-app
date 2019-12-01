import Vue from 'vue'
import Vuex from 'vuex'

// 状态持久化插件
// import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex)

const store = new Vuex.Store({
	// plugins: [createPersistedState()],
	state: {
		todoList: [],
		unfinishedLength: 0
	},
	mutations: {
		addTodo(state, todo) {
			state.todoList.push(todo)
			// 未完成数目+1
			state.unfinishedLength++
		},
		finishTodo(state, index) {
			state.todoList[index].finished = true
			// 未完成数目-1
			state.unfinishedLength--
		},
		delTodo(state, index) {
			state.todoList.splice(index, 1)
		},
		formatList({
			todoList,
			unfinishedLength
		}) {
			for (let i = 0; i < unfinishedLength; i++) {
				if (todoList[i].finished == true)
					todoList.push(todoList.splice(i, 1)[0])
			}
		},
		getLocalStorage(state, data) {
			state.todoList = data.todoList
			state.unfinishedLength = data.unfinishedLength
		}
	},
	actions: {
		addTodo(context, todo) {
			context.commit('addTodo', todo)
			context.commit('formatList')
		},
		finishTodo(context, index) {
			context.commit('finishTodo', index)
			context.commit('formatList')
		},
		delTodo(context, index) {
			context.commit('delTodo', index)
		},
		getLocalStorage(context, data) {
			context.commit('getLocalStorage', data)
		}
	}
})



export default store
