'use strict';

describe('Unit Test: bInputEmail', function() {
  var $compile,
  $rootScope;

  beforeEach(module('bInputEmail'));

  beforeEach(inject(function(_$compile_, _$rootScope_)
    {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    })
  );

  it("should autocomplete gmail", function() {

    var body  = document.querySelector("body");
    body.innerHTML = '<div b-input-email ng-init="inputEmail.email=\'foo@g\'"><input type="text" placeholder="example@email.com" ng-model="inputEmail.email"></div>';

    $compile(body)($rootScope);

    expect($rootScope.inputEmail.email).toBe("foo@g");
    expect($rootScope.inputEmail.autocomplete).toBe("mail.com");
  });

});
