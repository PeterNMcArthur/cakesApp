export default [
	{
		"url": '/', 
		"props": {
			"templateUrl": '/views/list.html',
			"controller": 'ListController',
			"controllerAs": "list"
		}
	},
	{
		"url": '/add', 
		"props": {
			"templateUrl": '/views/add.html',
			"controller": 'AddCakeController',
			"controllerAs": "add"
		}
	},
	{
		"url": '/cake', 
		"props": {
			"templateUrl": '/views/cake.html',
			"controller": 'CakeController',
			"controllerAs": "cake"
		}
	}
]
