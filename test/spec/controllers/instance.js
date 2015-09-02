'use strict';

describe('Controller: InstanceCtrl', function () {

  // load the controller's module
  beforeEach(module('minionatorNgApp'));

  var InstanceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InstanceCtrl = $controller('InstanceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(InstanceCtrl.awesomeThings.length).toBe(3);
  });
});
