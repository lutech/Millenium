'use strict';
/* Directives */
var module = angular.module("app.directives", []);

module.directive("toggleColor", function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.click(function () {
                element.toggleClass("active");

                if (element.hasClass("active")) {
                    element.switchClass('red', 'blue', 500)
                } else {
                    element.switchClass('blue', 'red', 500)
                }

            })
        }
    }
});
module.directive("tile", function () {
    return {
        restrict: "E",
        link: function (scope, element, attrs) {
            element.dblclick(function () {
                element.toggleClass("active");

                if (element.hasClass("active")) {
                    element.find('tile-sub-content').switchClass('collapsed', 'expanded', 500, 'easeInOutQuart')
                } else {
                    element.find('tile-sub-content').switchClass('expanded', 'collapsed', 500, 'easeInOutQuart')
                }

            })
        }
    }
});
module.directive("tile-header", function () {
    return {
        restrict: "E",
        link: function (scope, element, attrs) {
            //element.html("<div></div>")
        }
    }
});
module.directive("tile-content", function () {
    return {
        restrict: "E",
        link: function (scope, element, attrs) {
            //element.html("<div></div>")
        }
    }
});
module.directive("tile-sub-content", function () {
    return {
        restrict: "E",
        link: function (scope, element, attrs) {
        }
    }
});
module.directive("inlineEdit", function () {



    return {
        retrict: "A",
        link: function (scope, element, attrs) {

            var target = attrs.scope

            element.click(function () {
                element.hide();
                target.show();
            });
            target.on("blur", function () {
                element.show();
                target.hide();
            })
        }
    }
})

