'use strict';

angular.module( 'dynamic-tree-recursive' ).service('localStorageService', ['CONSTANTS', function(CONSTANTS) {

    //Saves tree to Local Storage
    this.save = function ( tree ) {
      var treeJson = angular.toJson( tree );
      localStorage.setItem(CONSTANTS.TREE_STATE, treeJson);
      console.log('The following tree has beed saved: ' + treeJson);
    };
    //Reads tree from Local Storage
    this.retrieve = function () {
      var retrievedObject = localStorage.getItem(CONSTANTS.TREE_STATE);
      return JSON.parse(retrievedObject);
    };
    //Deletes tree from Local Storage
    this.delete = function () {
      localStorage.removeItem(CONSTANTS.TREE_STATE);
    };
    //Checks if tree is saved in Local Storage
    this.isTreeSaved = function () {
      if (localStorage.getItem(CONSTANTS.TREE_STATE) === null) {
        return false;
      }
      return true;
    };
}]);