export default function ListController(requestCakes, $routeParams) { 
	let vm = this
	requestCakes.getAll().then((res) => {
		vm.cakes = res.data
	}) 
}
