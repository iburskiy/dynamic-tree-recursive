'use strict';

angular.module( 'dynamic-tree-recursive' ).controller("TreeController", ['$scope', 'treeModel', function($scope, treeModel) {

    $scope.treeModel = treeModel;

}]);