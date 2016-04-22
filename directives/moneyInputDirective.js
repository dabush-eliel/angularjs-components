/* money input directive - using pattern for money values - xx.xx */
angular.module('myWorkHours')
    .directive('edMoneyInput', [moneyInput]);

function moneyInput() {
    var controller = function($scope){

    }; // end function::controller

    return {
        restrict: 'EA',
        scope: {
            name: '@',
            blurhandler: '&',
            focushandler: '&',
            model: '=',
            placeholder: '@',
            required: '=',
            disabled: '='
        },
        link: function ($scope, $element, $attr) {},
        controller: controller,
        template: '<input type="number" name="{{ name }}" step="0.01" pattern="([0-9]+([\.,][0-9]+)?)" inputmode="numeric" ng-min="0" placeholder="{{ placeholder || \'0\' }}" ng-model="model" ng-blur="blurhandler()" ng-focus="focushandler()" ng-disabled="disabled">'
    };
} // end function::moneyInput
