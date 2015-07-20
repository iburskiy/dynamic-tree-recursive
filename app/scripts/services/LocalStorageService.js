'use strict';

angular.module( 'dynamic-tree' ).factory('localStorageService', ['CONSTANTS', function(CONSTANTS) {

    return {
        //Saves tree to Local Storage
        save: function ( tree, solutionType ) {
            var treeJson = angular.toJson( tree );
            localStorage.setItem(CONSTANTS.TREE_STATE + solutionType, treeJson);
            console.log('The following tree has beed saved: ' + treeJson);
        },

        //Reads tree from Local Storage
        retrieve: function (solutionType) {
            var retrievedObject = localStorage.getItem(CONSTANTS.TREE_STATE + solutionType);
            return JSON.parse(retrievedObject);
        },

        //Deletes tree from Local Storage
        delete: function (solutionType) {
            localStorage.removeItem(CONSTANTS.TREE_STATE + solutionType);
        },

        //Checks if tree is saved in Local Storage
        isTreeSaved: function (solutionType) {
            if (localStorage.getItem(CONSTANTS.TREE_STATE + solutionType) === null) {
                return false;
            }
            return true;
        }
    };
}]);