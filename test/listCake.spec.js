describe('ListController', function() {
	var $controller
	var ListController
	
  beforeEach(angular.mock.module('cakeApp'))

  beforeEach(angular.mock.inject(function(_$controller_){
    $controller = _$controller_
  }))

  describe('controller', function() {
    it('is the controller defined', function() {
			var $scope = {}
      ListController = $controller('ListController', { $scope: $scope })
			expect(ListController).toBeDefined()
    })
  })
})


