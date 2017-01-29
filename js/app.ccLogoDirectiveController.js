(function() {
    angular.module('CreditCard')
        .controller('cclogoController', cclogoController);

    function cclogoController(){
        var cclogoCtrl = this;
        cclogoCtrl.cardNumber = "";
        cclogoCtrl.valid = false;
        cclogoCtrl.cardType = "unknown";

        cclogoCtrl.detectCardType = function(number) {
            var type = "unknown"
            var set = {
                Visa: /^4[0-9]{12}(?:[0-9]{3})(?:[0-9]{3})?$/,
                Discover: /^6(?:011|5[0-9]{2})[0-9]{12}(?:[0-9]{3})?$/,  
                Mastercard: /^(5[1-5][0-9]{14}$|22212720[0-9]{8}$)/,
                Amex: /^3[47][0-9]{13}$/,
                Maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
                Diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
                Electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
                Dankort: /^(5019)\d+$/,
                Interpayment: /^(636)\d+$/,
                Jcb: /^(?:2131|1800|35\d{3})\d{11}$/
            }
                //Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
            for(var key in set) {
                if(set.hasOwnProperty(key) && set[key].test(number) != false){
                    type = key;
                }
            }

            return type;
        }
        //luhnAlgorithm for credit card validation taken code from DiegoSalazar/validate_credit_card.js from github
        cclogoCtrl.validCreditCard = function(value) {
            // accept only digits, dashes or spaces
            if (/[^0-9-\s]+/.test(value)) return false;

            // The Luhn Algorithm. It's so pretty.
            var nCheck = 0, nDigit = 0, bEven = false;
            value = value.replace(/\D/g, "");

            for (var n = value.length - 1; n >= 0; n--) {
                var cDigit = value.charAt(n),
                    nDigit = parseInt(cDigit, 10);

                if (bEven) {
                    if ((nDigit *= 2) > 9) nDigit -= 9;
                }

                nCheck += nDigit;
                bEven = !bEven;
            }

            return (nCheck % 10) == 0;
        }

        cclogoCtrl.checkcard = function(number){
            var type = cclogoCtrl.detectCardType(number)
            cclogoCtrl.cardType = type ? type: "unknown";
            cclogoCtrl.valid = cclogoCtrl.validCreditCard(number);
            return cclogoCtrl.valid ? true : false;
        }
    }

})();