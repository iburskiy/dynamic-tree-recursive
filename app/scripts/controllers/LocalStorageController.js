'use strict';

angular.module( 'dynamic-tree' ).
    controller("LocalStorageController", ['$scope', 'localStorageService', 'treeModelService',
        function($scope, localStorageService, treeModelService) {

        //Saves tree to Local Storage
        $scope.save = function( solutionType ) {
            var tree = treeModelService.getCurrentTree( solutionType );
            localStorageService.save( tree, solutionType );
        };

        //Reads tree from Local Storage
        $scope.retrieve = function( solutionType ) {
            var tree = localStorageService.retrieve( solutionType );
            treeModelService.setCurrentTree( solutionType, tree);
            console.log('Tree has been retrieved!');
        };

        //Deletes tree from Local Storage
        $scope.delete = function( solutionType ) {
            localStorageService.delete( solutionType );
            console.log('Tree has been deleted!');
        };

        //flag to display Retrieve and Delete button
        $scope.isTreeSaved = function( solutionType ) {
            return localStorageService.isTreeSaved( solutionType );
        };
    }]);
