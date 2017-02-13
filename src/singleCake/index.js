	export default function CakeController(requestCakes, $routeParams) { 
		let vm = this
		requestCakes.getOne($routeParams.id).then((res) => {
			//compose objects together
			vm = Object.assign(vm, res.data)
		}) 
	}

