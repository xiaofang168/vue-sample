import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	// 存储状态 定义应用状态全局的数据结构
	state: {

	},
	/*
		mutations是提交状态修改，也就是set、get中的set，这是vuex中唯一修改state的方式，但是不支持异步操作。
		每个mutation都有一个字符串的事件类型(type)和一个回调函数(handler)
		第一个参数默认是state，外部调用方式为：store.commit('SET_AGE', 30).
	*/
	mutations: {

	},
	/*
		和上面的mutations类似，但是actions支持异步操作的，外部调用方式为：store.dispatch('nameAction')
		常见的使用是：从服务器端获取数据，在数据获取完成后会调用 store.commit()来更改Store中的状态。
		Action函数接收一个与store实列具有相同方法和属性的context对象，因此我们可以使用 context.commit 提交一个
		mutation，或者通过 context.state 和 context.getters来获取state和getters
	*/
	actions: {

	},
	/*
		getters是从state中派生出状态的。也就是set、get中的get，它有两个可选的参数，state和getters，
		分别可以获取state中的变量和其他的getters。外部调用的方式：store.getters.todoCount()
	*/
	getters: {

	}
})
