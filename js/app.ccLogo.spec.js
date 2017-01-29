
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
			card = ctrl.detectCardType("5178058034818354");
			expect(card).toEqual("Mastercard");
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



