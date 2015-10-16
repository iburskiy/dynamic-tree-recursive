//non-conflicting change in Branch
'use strict';

angular.module( 'dynamic-tree-recursive' ).controller("LocalStorageController", ['$scope', 'localStorageService', 'treeModel',
    function($scope, localStorageService, treeModel) {

        //Saves tree to Local Storage
        $scope.save = function() {
            var tree = treeModel.getTree();
            localStorageService.save( tree );
        };

        //Reads tree from Local Storage
        $scope.retrieve = function() {
            var tree = localStorageService.retrieve();
            treeModel.setTree(tree);
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
//non-conflicting change in MASTER
