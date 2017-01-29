(function(){
	angular.module('CreditCard').directive('cclogo', cclogo);

	function cclogo(){
		return {
			restrict: 'EA',
			controller: 'cclogoController',
			controllerAs: 'cclogoCtrl',
			bindToController: true,
			// templateUrl: '/Templates/CreditCardTemplate.html'
			template: '<div class="form" role="form" id="cc_form">\
							<div class="col-md-12 col-sm-12 col-xs-12">\
								<label for=card_number><span class="star">*</span>CARD NUMBER</label>\
								<input id="card_number" placeholder="Enter Card Number" class="{{cclogoCtrl.cardType}} input-group input-group-lg" maxlength=19 ng-model="cclogoCtrl.cardNumber" ng-change="cclogoCtrl.checkcard(cclogoCtrl.cardNumber)">\
								<p ng-if="cclogoCtrl.cardNumber.length > 15 && !cclogoCtrl.valid" class="errormsg"> Please enter a valid Card Number</p>\
								<p ng-if="cclogoCtrl.cardNumber.length > 1 && cclogoCtrl.cardNumber.length <= 15 && !cclogoCtrl.valid" class="star"> * Please enter all the digits of Card Number</p>\
								\
							</div>\
						</div>'
		}
	}





})();