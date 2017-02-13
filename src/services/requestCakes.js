export default ($http) => {
	const apiUrl = 'http://52.31.91.48:5000/api'
	return {
		getAll: () => {
			return $http({
				method: 'GET',
				url: `${ apiUrl }/cakes`
			})
		},
		getOne: (id) => {
			return $http({
				method: 'GET',
				url: `${ apiUrl }/cakes/${id}`
			})
		},
		post: (data) => {
			return $http({
				method: 'POST',
				url: `${ apiUrl }/cakes`,
				data
			})
		},
		put: (id, data) => {
			return $http({
				method: 'PUT',
				url: `${ apiUrl }/cakes/${id}`,
				data
			})
		},
		delete: (id) => {
			return $http({
				method: 'DELETE',
				url: `${ apiUrl }/cakes/${id}`
			})
		}
	}
}
