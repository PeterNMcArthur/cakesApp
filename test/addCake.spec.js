describe('AddCakeController', function() {
	var $controller
	var AddCakeController
	
  beforeEach(angular.mock.module('cakeApp'))

  beforeEach(angular.mock.inject(function(_$controller_){
    $controller = _$controller_
  }))

  describe('controller', function() {
    it('is the controller defined', function() {
			var $scope = {}
      AddCakeController = $controller('AddCakeController', { $scope: $scope })
			expect(AddCakeController).toBeDefined()
    })
  })
})

