'use strict';

angular.module( 'dynamic-tree' ).controller( "IterativeTreeController", ['$scope', 'iterativeTreeModel', function ( $scope, iterativeTreeModel ) {

    $scope.iterativeTreeModel = iterativeTreeModel;

}] );