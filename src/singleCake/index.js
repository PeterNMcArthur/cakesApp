	export default function CakeController(requestCakes, $routeParams) { 
		let vm = this
		requestCakes.getOne($routeParams.id).then((res) => {
			//compose objects together
			if (res.status !== 200) {
				$location.path("/")
				return
			}
			vm = Object.assign(vm, res.data)
		}) 
	}

