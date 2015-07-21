'use strict';

/**
 * @ngdoc function
 * @name dynamic-tree-recursive.controller:MainController
 * @description
 * # MainController
 * Controller of the dynamic-tree-recursive
 */
angular.module( 'dynamic-tree-recursive' )
    .controller( 'MainController', ['$scope', '$timeout', function ( $scope, $timeout ) {

        //Switches Node to Edit Mode: HTML input with current Node Name appears
        $scope.switchToEdit = function(index) {
            $scope.editedElemId = index;
            $scope.isEdit = true;
            //this syntax gives that function is run only after everything is rendered
            $timeout( function () {
                    document.getElementById('input' + index ).focus();
                }, 0
            );
        };

        //Switches Node back to Text Mode: instead of input just Node Name is displayed
        $scope.switchToText = function() {
            $scope.editedElemId = null;
            $scope.isEdit = false;
        };

    } ] );
