'use strict';

angular.module( 'dynamic-tree' ).controller("TreeController", ['$scope', 'treeModel', function($scope, treeModel) {

        $scope.treeModel = treeModel;

    }]);