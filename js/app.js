var app = angular.module('CengageOss',[]);

console.log('loading app.js');

app.directive('eatClick', function() {
    return function(scope, element, attrs) {
        $(element).click(function(event) {
            event.preventDefault();
        });
    }
});