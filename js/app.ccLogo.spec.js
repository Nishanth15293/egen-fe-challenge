
describe('cclogoController', function() {
	'use strict';

	var $controller;
	var ctrl;

	beforeEach(module('CreditCard'));

	beforeEach(inject(function (_$controller_) {
		$controller = _$controller_;
	}));


	describe('#detectCardType', function() {

		it('detectCardType gives correctType', function() {
			init();
			var card = ctrl.detectCardType(ctrl.cardNumber);
			expect(card).toEqual("Visa");
			//could write similar cases for all other card types too, like
			//var card = ctrl.detectCardType('6011111111111117');
			//expect(card).toEqual("Discover"); and so on...
		});
	});


	describe('#validCreditCard', function() {

		it('validCreditCard gives card is valid or not', function() {
			init();
			var card = ctrl.validCreditCard(ctrl.cardNumber);
			expect(card).toBe(true);
			card = ctrl.validCreditCard("4147202249805994");
			expect(ctrl.valid).toBe(false);
		});
	});

	describe('#checkcard', function() {

		it('checkcard gives card is valid or not', function() {
			init();
			var card = ctrl.checkcard(ctrl.cardNumber);
			expect(card).toBe(true);

			card = ctrl.checkcard("4147202249805994");
			expect(ctrl.valid).toBe(false);

		});
	});

	function init() {
		ctrl = $controller('cclogoController');
		ctrl.cardNumber = "4147202249805993";
	}
})

describe('ccLogoDirective', function(){
	"use-strict";
	var compile, scope, directiveElem;
	 beforeEach(function(){
	  module('CreditCard');
	  
	  inject(function($compile, $rootScope){
	    compile = $compile;
	    scope = $rootScope.$new();
	  });
	  
	  directiveElem = getCompiledElement();
	});

	function getCompiledElement(){
	  var element = angular.element('<div cclogo></div>');
	  var compiledElement = compile(element)(scope);
	  scope.$digest();
	  return compiledElement;
	}

	it('should exist', function () {
	  var inputElement = directiveElem.find('input');
	  expect(inputElement).toBeDefined();
	  // console.log(inputElement);
	  expect(inputElement.attr('id')).toBe('card_number');
	});

});


