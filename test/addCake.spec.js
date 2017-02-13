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
		describe("handleForm()", function() {
			it("return missing feilds", function() {
				$scope = {}
				AddCakeController = $controller('AddCakeController', { $scope: $scope })
				AddCakeController.name = "tom"
				AddCakeController.handleForm()
				expect(AddCakeController.emptyFields).toEqual([ 'comment', 'imageUrl', 'yumFactor' ])
			})
		})
	})
})

