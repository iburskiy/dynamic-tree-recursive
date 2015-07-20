'use strict';

angular.module( 'dynamic-tree' ).controller("RecursiveTreeController", ['$scope', 'recursiveTreeModel', function($scope, recursiveTreeModel) {

        $scope.recursiveTreeModel = recursiveTreeModel;

    }]);