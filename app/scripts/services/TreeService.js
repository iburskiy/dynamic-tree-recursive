'use strict';

angular.module( 'dynamic-tree' ).factory('treeService', function() {

    //id for new node for iterative solution
    var nodeId = 0;

    return {
        //Used for Recursive solution
        removeNodeById: function ( arr, id ) {
            var result = null;

            for(var i = 0; result === null && i < arr.length; i++){
                if(arr[i].id === id) {
                    result = arr[i].name;
                    arr.splice(i, 1);
                } else if ( arr[i].nodes.length !== 0 ) {
                    result = this.removeNodeById (arr[i].nodes, id);
                }
            }
            return result;
        },

        //Generates id for new node for iterative solution
        generateNodeId: function() {
            nodeId = nodeId + 1;
            return nodeId;
        },

        /*Used for Iterative solution:
         Filters through array and excludes 'obj' from 'arr' if removed node wth 'index' is one of its ancestors*/
        removeNodeByIndex: function( arr, index) {

            var tree = _.filter(arr, function(obj) {
                return removedIndexNotObjAncestor(obj);
            } );

            //Returns false if removed object with "index" is parent of obj to exclude it from tree
            function removedIndexNotObjAncestor(obj) {
                var result = null;
                if( obj === null) {
                    return true;
                } else if( angular.toJson(arr[index]) === angular.toJson(obj)) {
                    return false;
                } else {
                    result = removedIndexNotObjAncestor(obj.parent);
                }

                return result;
            }

            return tree;
        }
    };
});