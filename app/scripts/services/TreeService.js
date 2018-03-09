'use strict';

angular.module( 'dynamic-tree-recursive' ).service('treeService', function() {

    //id for new node for recursive solution
    var nodeId = 0;

    //Used for solution
    this.removeNodeById = function ( arr, id ) {
      var result = null;

      for(var i = 0; result === null && i < arr.length; i++){
        if(arr[i].id === id) {
          result = arr[i].name;
          arr.splice(i, 1);
        } else if ( arr[i].nodes.length !== 0 ) {
          //recursive call of function itself
          result = this.removeNodeById (arr[i].nodes, id);
        }
      }
      return result;
    };

    //Generates id for new node for recursive solution
    this.generateNodeId = function() {
      nodeId = nodeId + 1;
      return nodeId;
    };
});