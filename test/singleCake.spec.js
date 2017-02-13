describe('CakeController', function() {
	var $controller
	var CakeController
	
  beforeEach(angular.mock.module('cakeApp'))

  beforeEach(angular.mock.inject(function(_$controller_){
    $controller = _$controller_
  }))

  describe('controller', function() {
    it('is the controller defined', function() {
			var $scope = {}
      CakeController = $controller('CakeController', { $scope: $scope })
			expect(CakeController).toBeDefined()
    })
  })
})


