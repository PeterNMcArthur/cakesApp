import { getEmptyFields } from "./processForm"

export default function AddCakeController(requestCakes, $location) { 
	let vm = this
	vm.handleForm = () => {
		const { comment, imageUrl, name, yumFactor } = vm
		const data = { 
			comment, 
			imageUrl, 
			name, 
			yumFactor
		}
		vm.emptyFields = getEmptyFields(data)
		
		if (vm.emptyFields.length === 0) {
			requestCakes.post(data).then((res) => {
				if (res.status === 201) $location.path("/")
			}) 
		}
	}
}
