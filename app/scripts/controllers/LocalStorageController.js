'use strict';

angular.module( 'dynamic-tree' ).
    controller("LocalStorageController", ['$scope', 'localStorageService', 'recursiveTreeModel',
        function($scope, localStorageService, recursiveTreeModel) {

        //Saves tree to Local Storage
        $scope.save = function() {
            var tree = recursiveTreeModel.getTree();
            localStorageService.save( tree );
        };

        //Reads tree from Local Storage
        $scope.retrieve = function() {
            var tree = localStorageService.retrieve();
            recursiveTreeModel.setTree(tree);
            console.log('Tree has been retrieved!');
        };

        //Deletes tree from Local Storage
        $scope.delete = function( ) {
            localStorageService.delete();
            console.log('Tree has been deleted!');
        };

        //flag to display Retrieve and Delete button
        $scope.isTreeSaved = function() {
            return localStorageService.isTreeSaved();
        };
    }]);
