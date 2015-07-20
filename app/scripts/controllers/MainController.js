'use strict';

/**
 * @ngdoc function
 * @name dynamic-tree.controller:MainController
 * @description
 * # MainController
 * Controller of the dynamic-tree
 */
angular.module( 'dynamic-tree' )
    .controller( 'MainController', ['$scope', '$timeout', 'CONSTANTS', function ( $scope, $timeout, CONSTANTS ) {

        $scope.solutionType = CONSTANTS.RECURSIVE;

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
