import Vue from 'vue'
const state = {
	orderList:[],
	params:{
		//key:val
	}
}
const getters = {
	// orderList:function(state){
	// 	return state.orderList
	// }
	getOrderList:(state) => state.orderList
}
const actions = {
	fetchOrderList({commit,state}){
		Vue.http.get('./api/getOrderList',state.params).then((res) =>{
        commit('updataOrderList',res.data.data.list)
        // state.orderList = res.data.data.list
        // state.total = res.data.data.total
        //this.tableData = res.data.data.list
        //console.log(this.tableData)
      }),(err) => {

      }
	}
}
const mutations = {
	updataOrderList (state,payload) {
		state.orderList = payload
	},

	updataParams(state,{key,val}){

		state.params[key] = val
		console.log(state.params)  
		//console.log("hello")
	}
}
export default {
	state,
	getters,
	actions,
	mutations
}