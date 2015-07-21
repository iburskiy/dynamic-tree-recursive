'use strict';

angular.module( 'dynamic-tree' ).factory('localStorageService', ['CONSTANTS', function(CONSTANTS) {

    return {
        //Saves tree to Local Storage
        save: function ( tree ) {
            var treeJson = angular.toJson( tree );
            localStorage.setItem(CONSTANTS.TREE_STATE, treeJson);
            console.log('The following tree has beed saved: ' + treeJson);
        },

        //Reads tree from Local Storage
        retrieve: function () {
            var retrievedObject = localStorage.getItem(CONSTANTS.TREE_STATE);
            return JSON.parse(retrievedObject);
        },

        //Deletes tree from Local Storage
        delete: function () {
            localStorage.removeItem(CONSTANTS.TREE_STATE);
        },

        //Checks if tree is saved in Local Storage
        isTreeSaved: function () {
            if (localStorage.getItem(CONSTANTS.TREE_STATE) === null) {
                return false;
            }
            return true;
        }
    };
}]);