'use strict';

angular.module( 'dynamic-tree' ).factory('iterativeTreeModel', ['IterativeNodeModel', 'treeService', function(IterativeNodeModel, treeService) {

    //private field
    var tree = [new IterativeNodeModel( "Element", 0, null )];
    //public model
    var iterativeTree = {};

    //Adds new node to the tree
    iterativeTree.add = function ( node, index ) {
        var sameDepthArr = _.filter( tree, function ( obj ) {
            return obj.depth === node.depth + 1;
        } ), newName;

        newName = node.name + '-' + (sameDepthArr.length + 1);

        tree.splice( index + 1, 0, new IterativeNodeModel( newName, node.depth + 1, node ) );
    };

    //Removes node item from the tree
    iterativeTree.remove = function(index) {
        tree = treeService.removeNodeByIndex( tree, index );
    };

    iterativeTree.getTree = function() {
        return tree;
    };

    iterativeTree.setTree = function(treeObj) {
        tree = treeObj;
    };

    return iterativeTree;
}]);