/* time input directive - using pattern for time values in a day (up to 24 hours) */
angular.module('myWorkHours')
    .directive('edTimeInput', [timeInput]);

function timeInput() {
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
        template: '<input type="text" name="{{ name }}" step="0.01" inputmode="numeric" ng-min="0" ng-max="24" ng-pattern="/^(([2][0-3]|[0-1]?[0-9])(([\.][0-9][0-9]?)|([:][0-5]?[0-9]))?)$/" placeholder="{{ placeholder || \'HH:MM (7:30) / HH.H (7.5)\' }}" ng-model="model" ng-blur="blurhandler()" ng-focus="focushandler()" ng-disabled="disabled">'
    };
} // end function::timeInput
