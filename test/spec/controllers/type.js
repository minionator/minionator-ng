'use strict';

describe('Controller: TypeCtrl', function () {

  // load the controller's module
  beforeEach(module('minionatorNgApp'));

  var TypeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TypeCtrl = $controller('TypeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TypeCtrl.awesomeThings.length).toBe(3);
  });
});
