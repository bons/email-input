'use strict';

describe('Unit Test: bInputEmail autocomplete', function()
{
  var $compile,
  $rootScope;

  beforeEach(module('bInputEmail'));

  beforeEach(inject(function(_$compile_, _$rootScope_)
    {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    })
  );

  it("should show gmail", function()
  {
    var body  = document.querySelector("body");
    body.innerHTML = '<div b-input-email ng-init="inputEmail.email=\'foo@g\'"><input type="text" placeholder="example@email.com" ng-model="inputEmail.email"></div>';

    $compile(body)($rootScope);

    expect($rootScope.inputEmail.email).toBe("foo@g");
    expect($rootScope.inputEmail.autocomplete).toBe("mail.com");
  });

  it("should show hotmail", function()
  {
    var body  = document.querySelector("body");
    body.innerHTML = '<div b-input-email ng-init="inputEmail.email=\'foo@h\'"><input type="text" placeholder="example@email.com" ng-model="inputEmail.email"></div>';

    $compile(body)($rootScope);

    expect($rootScope.inputEmail.email).toBe("foo@h");
    expect($rootScope.inputEmail.autocomplete).toBe("otmail.com");
  });

  it("should show outlook", function()
  {
    var body  = document.querySelector("body");
    body.innerHTML = '<div b-input-email ng-init="inputEmail.email=\'foo@o\'"><input type="text" placeholder="example@email.com" ng-model="inputEmail.email"></div>';

    $compile(body)($rootScope);

    expect($rootScope.inputEmail.email).toBe("foo@o");
    expect($rootScope.inputEmail.autocomplete).toBe("utlook.com");
  });

  it("should show yahoo", function()
  {
    var body  = document.querySelector("body");
    body.innerHTML = '<div b-input-email ng-init="inputEmail.email=\'foo@y\'"><input type="text" placeholder="example@email.com" ng-model="inputEmail.email"></div>';

    $compile(body)($rootScope);

    expect($rootScope.inputEmail.email).toBe("foo@y");
    expect($rootScope.inputEmail.autocomplete).toBe("ahoo.com");
  });

  it("should show aol", function()
  {
    var body  = document.querySelector("body");
    body.innerHTML = '<div b-input-email ng-init="inputEmail.email=\'foo@a\'"><input type="text" placeholder="example@email.com" ng-model="inputEmail.email"></div>';

    $compile(body)($rootScope);

    expect($rootScope.inputEmail.email).toBe("foo@a");
    expect($rootScope.inputEmail.autocomplete).toBe("ol.com");
  });

  it("should show live", function()
  {
    var body  = document.querySelector("body");
    body.innerHTML = '<div b-input-email ng-init="inputEmail.email=\'foo@l\'"><input type="text" placeholder="example@email.com" ng-model="inputEmail.email"></div>';

    $compile(body)($rootScope);

    expect($rootScope.inputEmail.email).toBe("foo@l");
    expect($rootScope.inputEmail.autocomplete).toBe("ive.com");
  });

  it("should show icloud", function()
  {
    var body  = document.querySelector("body");
    body.innerHTML = '<div b-input-email ng-init="inputEmail.email=\'foo@i\'"><input type="text" placeholder="example@email.com" ng-model="inputEmail.email"></div>';

    $compile(body)($rootScope);

    expect($rootScope.inputEmail.email).toBe("foo@i");
    expect($rootScope.inputEmail.autocomplete).toBe("cloud.com");
  });
});
