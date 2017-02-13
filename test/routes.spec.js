describe('Routes', function() {
	var $route
	
  beforeEach(angular.mock.module('cakeApp'))

  beforeEach(angular.mock.inject(function(_$route_){
    $route = _$route_
  }))

	describe("routes", function() {

		it("list view", function() {
			expect($route.routes['/'].templateUrl).
				toEqual('/views/list.html')
		})

		it("add view", function() {
			expect($route.routes['/add'].templateUrl).
				toEqual('/views/add.html')
		})

		it("single cake view", function() {
			expect($route.routes['/cake'].templateUrl).
				toEqual('/views/cake.html')
		})

	})

})
