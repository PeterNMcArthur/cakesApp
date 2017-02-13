function RatingController() {
	let vm = this
	const fullStar = ("\u2605")
	const emptyStar = ("\u2606")
	this.$onChanges = function() {
		const makeStar = (number = 1, arr = []) => {
			if (number === 6) return arr
			const code = (number <= vm.rating) ? fullStar : emptyStar
			return makeStar( number + 1, [...arr, code ])
		}
		vm.stars = makeStar()
	}
}

export default {
	bindings: {
		rating: '<'
	},
	controller: RatingController,
	template: `
<span class="" data-ng-repeat="star in $ctrl.stars track by $index">{{ star }}</span
	`,
}
